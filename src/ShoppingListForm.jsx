import { useState } from "react";
export default function ShoppingListForm({ onSubmit }) {
    const [formData, setFormData] = useState({ product: "", quantity: 0 });

    const handleChange = (event) => {
        const changedField = event.target.name
        const changedValue = event.target.value
        setFormData(currentData => {
            currentData[changedField] = changedValue;
            return { ...currentData };
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData);
        setFormData({ product: "", quantity: 0 }); //we reset the fields after submitting 
    };

    return (<form onSubmit={handleSubmit}>
        <h1>You got {formData.quantity} {formData.product}</h1>
        <label htmlFor="productID">Product Name </label>
        <input type="text"
            placeholder="product name"
            name="product"
            id="productID"
            value={formData.product}
            onChange={handleChange} />

        <label htmlFor="qyantityID">Quantity </label>
        <input type="number"
            placeholder="quantity"
            name="quantity"
            id="qyantityID"
            value={formData.quantity}
            onChange={handleChange} />
        <button type="Submit">Add</button>
    </form>);
}
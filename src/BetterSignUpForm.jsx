import { useState } from "react";

export default function BetterSignUpForm() {

    const [formData, setFormData] = useState({ firstName: "", lastName: "", password: "" });

    const handleChange = (event) => {
        const changedField = event.target.name;
        const newValue = event.target.value;
        setFormData(currentData => {
            console.log(currentData) //gives us back the formData object back {firstName,lastName}; 
            console.log(` value that changed: ${changedField}`) // changedField gives us back the name of the input field that changed 
            currentData[changedField] = newValue; // [changedField] is the same as doing .changedField. We can add a property to an object or update on by doing so. It adds the value from the variable changedField
            return { ...currentData }; // we make a copy of it so that the object is not the same and it can be updated
        })
    }
    const handleSubmit = () => { alert(formData); }

    return (
        <div>
            <label htmlFor="firstName">First Name </label>
            <input id="firstName" type="text" placeholder="firstName" value={formData.firstName} name="firstName" onChange={handleChange} />
            <label htmlFor="lastName">Last Name </label>
            <input id="lastName" type="text" placeholder="lastName" value={formData.lastName} name="lastName" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
            <label htmlFor="password">Last Name </label>
            <input id="password" type="password" placeholder="password" value={formData.password} name="password" onChange={handleChange} />
        </div>
    )
}
import { useState } from "react";

export default function SignUpForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const updateFirstName = (evt) => {
        const changedText = evt.target.value
        setFirstName(changedText)
    };
    const updateLastName = (evt) => {
        const changedText = evt.target.value
        setLastName(changedText)
    };
    const handleSubmit = () => {
        alert(`${firstName} ${lastName}`);
    }

    return (
        <div>
            <label htmlFor="firstName">First Name </label>
            <input id="firstName" type="text" placeholder="firstName" value={firstName} onChange={updateFirstName} />
            <label htmlFor="lastName">Last Name </label>
            <input id="lastName" type="text" placeholder="lastName" value={lastName} onChange={updateLastName} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
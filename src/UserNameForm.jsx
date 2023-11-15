import { useState } from "react";

export default function UserNameForm() {
    const [userName, setUserName] = useState("timmy");
    const updateUserName = (evt) => {
        const changedText = evt.target.value
        setUserName(changedText)
    };
    return (
        <div>
            <label htmlFor="username">Username </label>
            <input id="username" type="text" placeholder="username" value={userName} onChange={updateUserName} />
            <button>Submit</button>
        </div>
    )
}
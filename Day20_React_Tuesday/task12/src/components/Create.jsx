import { useState } from "react"

const Create = () => {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [title, setTitle] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        const user = { first, last, title }
        fetch('http://localhost:8000/users', {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        setFirst("");
        setLast("");
        setTitle("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>First Name: </label>
            <input type="text" required value={first} onChange={(e) => setFirst(e.target.value)}></input>
            <br />
            <br />
            <label>Last Name: </label>
            <input type="text" required value={last} onChange={(e) => setLast(e.target.value)}></input>
            <br />
            <br />
            <label>Title: </label>
            <select value={title} onChange={(e) => setTitle(e.target.value)}>
                <option value="mr">Mr</option>
                <option value="mrs">Mrs</option>
                <option value="dr">Dr</option>
            </select>
            <br />
            <br />
            <button>Add User</button>
        </form>
    )
}

export default Create;
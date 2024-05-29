import { useState } from "react"

function AddTask() {
    const [priority, setPriority] = useState("")
    const [name, setName] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [info, setInfo] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const handleSubmitTask = (e) => {
        e.preventDefault();
        const task = {name, priority, dueDate, info, imageUrl}

        fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: { "Content-type" : "application/json"},
            body: JSON.stringify(task)
        })

        alert("Task added")
        setPriority('')
        setName('')
        setDueDate('')
        setInfo('')
        setImageUrl('')
    }
    
    return (
        <form onSubmit={handleSubmitTask}>
            <div className="flex">
                <label>Priority: </label>
                <select required value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
            </div>
            <div className="flex">
                <label>Name: </label>
                <input type="text" value={name} required onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className="flex">
                <label>Due date: </label>
                <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)}></input>
            </div>
            <div className="flex">
                <label>Task info: </label>
                <input type="text" value={info} required onChange={(e) => setInfo(e.target.value)}></input>
            </div>
            <div className="flex">
                <label>Image link: </label>
                <input type="text" value={imageUrl} required onChange={(e) => setImageUrl(e.target.value)}></input>
            </div>
            <div className="flex">
                <button>Add</button>
            </div>
        </form>
    )
}

export default AddTask;
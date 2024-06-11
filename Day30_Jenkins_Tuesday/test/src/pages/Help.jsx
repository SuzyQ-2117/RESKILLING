import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Help() {

    const [show, setShow] = useState(false);

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [notes, setNotes] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Fetch today's datw 
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const yyyy = today.getFullYear();
    // Put today's date into a minimum value variable 
    const formattedDate = yyyy + '-' + mm + '-' + dd;

    const handleSubmitTicket = (e) => {
        e.preventDefault();
        const ticket = { title, description, name, date, time, notes }

        fetch('http://localhost:8000/tickets', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(ticket)
        })

        alert("Ticket raised")
        setTitle("")
        setDescription("")
        setName("")
        setDate("")
        setTime("")
        setNotes("")
        handleClose()
    }

    return (
        <div className="flex">
            <div>
                <h3>Contact</h3>
                <p><FontAwesomeIcon icon={faEnvelope} /> THIS IS AN ADDRESS</p>
                <p><FontAwesomeIcon icon={faAt} /> SEND AN EMAIL HERE </p>
                <p><FontAwesomeIcon icon={faPhone} />01234 567890 </p>
            </div>
            <div>
                <button>Knowledge Articles</button>
                <button onClick={handleShow}>Raise New Ticket</button>
            </div>
            <>
                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Ticket</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="flex">
                            <form onSubmit={handleSubmitTicket}>
                                <div>
                                    <label>Title: </label>
                                    <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)}></input>
                                </div>
                                <div>
                                    <label>Description: </label>
                                    <input type="text" required value={description} onChange={(e) => setDescription(e.target.value)}></input>
                                </div>
                                <div>
                                    <label>Name: </label>
                                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)}></input>
                                </div>
                                <div>
                                    <label>Date: </label>
                                    <input type="date" value={date} min={formattedDate} required onChange={(e) => setDate(e.target.value)}></input>
                                </div>
                                <div>
                                    <label>Time of issue: </label>
                                    <input type="time" required value={time} onChange={(e) => setTime(e.target.value)}></input>
                                </div>
                                <div>
                                    <label>Please outline any other relevant information: </label>
                                    <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)}></input>
                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                        <button variant="primary" type="submit" onClick={handleSubmitTicket}>Submit</button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}
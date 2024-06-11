export default function TicketCard({ name, date, title, description, time, notes, id }) {
 const logID = () => {
    console.log(id)
 }

    return (
        <div className="card ticket-card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Raised by: {name}</h6>
                <p>Time: {time} | Date: {date}</p>
                <div>
                    <h6>Description: </h6>
                    <p className="card-text">{description}</p>
                    <h6>Notes:</h6>
                    <p> {notes}</p>
                </div>
                <button onClick={logID} value={id}>Go to ticket</button>
            </div>
        </div>
    )
}
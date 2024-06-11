import TicketCard from "../components/TicketCard";
import TicketList from '../data/TicketList.json'

export default function Tickets() {
    return (
        <div>
            <h2>TICKET CONTENT GOES HERE</h2>
            <div className="flex">
                {TicketList.tickets.map((ticket) => (
                    <TicketCard
                        key={ticket.id}
                        id={ticket.id}
                        title={ticket.title}
                        description={ticket.description}
                        name={ticket.name}
                        date={ticket.date}
                        time={ticket.time}
                        notes={ticket.notes}
                    />
                ))}
            </div>
        </div>

    )
}

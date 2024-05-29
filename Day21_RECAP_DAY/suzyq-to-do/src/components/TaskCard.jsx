export default function TaskCard({ name, priority, dueDate, info, imageUrl }) {
    return (
        <div className="flex"> 
            <div className="card">
                <div className="flex">
                    <img src={imageUrl} alt=""/>
                    <div>
                        <div className="flex">
                            <p className="gap">Priority: {priority}</p>
                            <p className="gap">Due: {dueDate}</p>
                        </div>
                        <p>{name}</p>
                    </div>
                </div>
                <p>{info}</p>
            </div>
        </div>
    );
}

//no mapping in the card component - you're just laying out what sits where
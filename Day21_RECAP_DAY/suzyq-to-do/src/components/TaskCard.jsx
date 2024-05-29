import TaskList from '../TaskList.json'

export default function TaskCard({ name, priority, dueDate, info, imageUrl }) {
    return (
        <div>
            <div className=" ">
                <div>
                    <img src={imageUrl} alt=""/>
                    <div>
                        <div className="flex">
                            <p>{priority}</p>
                            <p>Due: </p>
                            <p>{dueDate}</p>
                        </div>
                        <p>{name}</p>
                    </div>
                <p>{info}</p>
                </div>
            </div>
        </div>
    );
}

//no mapping in the card component - you're just laying out what sits where
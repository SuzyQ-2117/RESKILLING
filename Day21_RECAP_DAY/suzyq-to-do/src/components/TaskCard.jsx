import TaskList from '../TaskList.json'

function TaskCard({ name, priority, dueDate, info, imageUrl }) {
    return (
        <div>
            <div className="flex">
            {/* {TaskList.map((tasks) => ( */}
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
            {/* ))} */}
            </div>
        </div>
    );
}

export default TaskCard;

//no mapping in the card component - you're just laying out what sits where
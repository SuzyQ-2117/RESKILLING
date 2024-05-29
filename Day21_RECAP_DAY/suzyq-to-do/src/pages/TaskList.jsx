import TaskCard from '../components/TaskCard';
import TaskList from '../TaskList.json'

const ShowTasks = () => {

    return (
        <div className="center">
            <h1>Current Task List</h1>
            <div className="flex wrap max-width">
            {TaskList.tasks.map((tasks) => (
                <TaskCard 
                priority={tasks.priority}
                name={tasks.name}
                dueDate={tasks.dueDate}
                info={tasks.info}
                imageUrl={tasks.imageUrl}
                />
            ))}
            </div>
        </div>
    )
}

export default ShowTasks;

//better way around is to map the items in line 8 here, not in the card
import TaskCard from '../components/TaskCard';

const ShowTasks = () => {

    return (
        <div className="flex">
            <h1>Current Task List</h1>
            <TaskCard />
        </div>
    )
}

export default ShowTasks;

//better way around is to map the items in line 8 here, not in the card
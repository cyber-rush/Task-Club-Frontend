
const PendingTasks = ({ pendingTasksCount }) => {
    return (
        <div className="bg-yellow-100 p-4 rounded-md mb-4">
            <h2 className="text-lg font-semibold text-yellow-700">Pending Tasks</h2>
            <p>{pendingTasksCount} tasks pending</p>
        </div>
    );
};

export default PendingTasks;

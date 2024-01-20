
const CompleteTasks = ({ completedTasksCount }) => {
    return (
        <div className="bg-green-100 p-4 rounded-md mt-16 mb-4">
            <h2 className="text-lg font-semibold text-green-700">Complete Tasks</h2>
            <p>{completedTasksCount} tasks completed</p>
        </div>
    );
};

export default CompleteTasks;

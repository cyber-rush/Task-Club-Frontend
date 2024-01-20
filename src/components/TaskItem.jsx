import { useTaskContext } from '../context/TaskProvider';
import EditTaskButton from './EditTaskButton';

const TaskItem = ({ task }) => {

    const { toggleTaskCompletion, deleteTask } = useTaskContext();

    return (
        <div className="border p-4 mb-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
            <p className="text-gray-600 mb-4">{task.description}</p>

            {/* Date Picker - You can replace this with your specific date picker component */}
            <input
                type="date"
                className="p-2 border rounded-md mb-4"
                value={task.dueDate}
            // Handle date change logic here
            />

            {/* Complete Button */}
            <button
                className={`text-white px-4 py-2 rounded-md mx-2 w-28 ${task.completed ? 'bg-green-500' : 'bg-neutral-500'}`}
                onClick={() => toggleTaskCompletion(task.id)}
            >
                {task.completed ? 'Completed' : 'Complete'}
            </button>


            {/* Edit Button */}
            <EditTaskButton taskId={task.id} />

            {/* Priority Button */}
            <select
                className="p-2 border rounded-md mr-2"
                value={task.priority}
            // onChange={(e) => {
            //     // Handle priority change logic here
            // }}
            >
                <option value="1">Priority 1</option>
                <option value="2">Priority 2</option>
                <option value="3">Priority 3</option>
            </select>

            {/* Delete Button */}
            <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => deleteTask(task.id)}
            >
                Delete
            </button>
        </div>
    );
};

export default TaskItem;

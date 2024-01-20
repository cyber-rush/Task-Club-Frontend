import { useEffect } from "react";
import { useTaskContext } from "../context/TaskProvider";

const NewTask = ({ closeModal, editMode, taskToEdit }) => {
    const { handleAddNewTask, handleEditTask, setNewTask, newTask } = useTaskContext();

    // Use the existing taskToEdit details when in edit mode
    useEffect(() => {
        if (editMode && taskToEdit) {
            setNewTask(prevTask => ({
                ...prevTask,
                ...taskToEdit,
                completed: false,
            }));
        }
    }, [editMode, taskToEdit, setNewTask]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    const handleTaskAction = () => {
        if (editMode) {
            handleEditTask(newTask); // Call the edit task function from your context
            console.log('Inside edit')
            console.log('newTAsk', newTask)
        } else {
            handleAddNewTask(); // Call the add new task function from your context
            console.log('Inside add')
        }
        closeModal();
    };

    return (
        <div className="bg-white w-96 p-6 border rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
                {editMode ? "Edit Task" : "Add New Task"}
            </h2>

            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
            </label>
            <input
                type="text"
                id="title"
                name="title"
                value={newTask.title}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
            />

            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mt-4">
                Description
            </label>
            <textarea
                id="description"
                name="description"
                value={newTask.description}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
            />

            <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mt-4">
                Priority
            </label>
            <select
                id="priority"
                name="priority"
                value={newTask.priority}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
            >
                <option value="1">Priority 1</option>
                <option value="2">Priority 2</option>
                <option value="3">Priority 3</option>
            </select>

            <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mt-4">
                Due Date
            </label>
            <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={newTask.dueDate}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
            />

            <div className="flex justify-end mt-6">
                <button onClick={closeModal} className="mr-2 py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600">
                    Cancel
                </button>
                <button onClick={handleTaskAction} className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600">
                    {editMode ? "Save Changes" : "Add Task"}
                </button>
            </div>
        </div>
    );
};

export default NewTask;

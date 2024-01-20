import { useContext, useId, useState } from "react";
import TaskContext from "./TaskContext"
import tasksData from "../util/data";

const TaskProvider = ({ children }) => {

    const generateUniqueId = useId();

    const [tasks, setTasks] = useState(tasksData);
    const [showForm, setShowForm] = useState(false);
    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        priority: "1", // Default priority
        dueDate: "", // Default due date
    });

    const completedTasksCount = tasks.filter((task) => task.completed).length;
    const pendingTasksCount = tasks.filter((task) => !task.completed).length;
    // Function to toggle completion status globally
    const toggleTaskCompletion = (taskId) => {
        const updatedTasks = tasks.map((task) => (
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
        setTasks(updatedTasks);
    };

    //Function to delete task
    const deleteTask = (taskId) => {
        try {
            const updatedTasks = tasks.filter((task) => task.id !== taskId);
            setTasks(updatedTasks);
        } catch (error) {
            console.error('Error deleting task:', error.message);
        }
    };

    // Function to add a new task
    const addNewTask = (newTask) => {
        try {
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
        } catch (error) {
            console.error("Error adding new task:", error.message);
        }
    };

    //Function to handle new addition of task
    const handleAddNewTask = () => {
        // Validate the new task data (you can add your validation logic here)

        // Call the addNewTask function from the context
        addNewTask({
            ...newTask,
            id: generateUniqueId, // Assuming you have a function to generate unique IDs
            completed: false, // Assuming a new task is initially not completed
            createdAt: new Date().toISOString(),
        });

        // Reset the form and hide it
        setNewTask({
            title: "",
            description: "",
            priority: "1", // Reset to default priority
            dueDate: "", // Reset to default due date
        });
        setShowForm(false);
    };



    //Function to edit a previously created task
    const handleEditTask = (editedTask) => {
        try {
            const updatedTasks = tasks.map((task) => (
                task.id === editedTask.id ? { ...task, ...editedTask } : task
            ));
            setTasks(updatedTasks);
            console.log('Updating tasks', tasks)
        } catch (error) {
            console.error('Error editing task:', error.message);
        }
    };

    return (
        <TaskContext.Provider value={
            {
                tasks, toggleTaskCompletion, deleteTask, showForm, setShowForm, handleAddNewTask, handleEditTask,
                setNewTask, newTask, completedTasksCount, pendingTasksCount
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTaskContext must be used within a TaskProvider");
    }
    return context;
};

export default TaskProvider
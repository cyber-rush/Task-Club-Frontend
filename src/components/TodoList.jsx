import { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import { useTaskContext } from '../context/TaskProvider';

const TodoList = () => {
    const { tasks } = useTaskContext();
    const [sortBy, setSortBy] = useState('creationDate'); // Default sorting by creation date
    const [sortedTasks, setSortedTasks] = useState([...tasks]);

    useEffect(() => {
        // Update sortedTasks when tasks change
        let newSortedTasks = [...tasks];

        switch (sortBy) {
            case 'dueDate':
                newSortedTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
                break;
            case 'today':
                newSortedTasks = filterTasksByToday(newSortedTasks);
                break;
            case 'tomorrow':
                newSortedTasks = filterTasksByTomorrow(newSortedTasks);
                break;
            case 'priority':
                newSortedTasks.sort((a, b) => a.priority - b.priority);
                break;
            default:
                // 'creationDate' or unknown sorting option
                newSortedTasks.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        }

        setSortedTasks(newSortedTasks);
    }, [tasks, sortBy]); // Re-run the effect when tasks or sortBy change

    const handleSortByChange = (newSortBy) => {
        setSortBy(newSortBy);
    };

    const filterTasksByToday = (tasks) => {
        const today = new Date().toISOString().slice(0, 10);
        return tasks.filter((task) => task.dueDate === today);
    };

    const filterTasksByTomorrow = (tasks) => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowDateString = tomorrow.toISOString().slice(0, 10);
        return tasks.filter((task) => task.dueDate === tomorrowDateString);
    };

    return (
        <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Todo List</h2>
                <div className="flex items-center space-x-4">
                    <span className="text-gray-600">Sort by:</span>
                    <select
                        className="border p-2 rounded-md"
                        value={sortBy}
                        onChange={(e) => handleSortByChange(e.target.value)}
                    >
                        <option value="dueDate">Due Date</option>
                        <option value="today">Today</option>
                        <option value="tomorrow">Tomorrow</option>
                        <option value="priority">Priority</option>
                        <option value="creationDate">Creation Date</option>
                    </select>
                </div>
            </div>
            <ul>
                {sortedTasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

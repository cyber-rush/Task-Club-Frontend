import PendingTasks from '../../components/PendingTasks';
import CompleteTasks from '../../components/CompletedTasks';
import PieChart from '../../components/PieChart';
import AddNewTaskButton from '../../components/AddNewTaskButton ';
import TodoList from '../../components/TodoList';
import { useTaskContext } from '../../context/TaskProvider';
import { useContext } from 'react';
import UserContext from '../../context/user/userContext';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const { user, logout } = useContext(UserContext)
    const { completedTasksCount, pendingTasksCount } = useTaskContext()
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout(); // Call the logout function from the context
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error.message);
        }
    };

    return (
        <>
            {
                !!user && (
                    <div className="p-4">
                        <div className="mb-8">
                            <PieChart />
                        </div>
                        <div className="mb-8">
                            <CompleteTasks completedTasksCount={completedTasksCount} />
                        </div>
                        <div className="mb-8">
                            <PendingTasks pendingTasksCount={pendingTasksCount} />
                        </div>
                        <div className="mb-8">
                            <TodoList />
                        </div>
                        <div>
                            <AddNewTaskButton />
                        </div>
                        <div className="absolute top-4 right-4">
                            {/* Logout button */}
                            <button
                                onClick={handleLogout}
                            >
                                <LogoutIcon />
                            </button>
                        </div>
                    </div>
                )
            }
        </>

    );
};

export default Home;

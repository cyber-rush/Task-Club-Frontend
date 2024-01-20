import PendingTasks from '../../components/PendingTasks';
import CompleteTasks from '../../components/CompletedTasks';
import PieChart from '../../components/PieChart';
import AddNewTaskButton from '../../components/AddNewTaskButton ';
import TodoList from '../../components/TodoList';
import { useTaskContext } from '../../context/TaskProvider';

const Home = () => {
    const { completedTasksCount, pendingTasksCount } = useTaskContext()


    return (
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
        </div>
    );
};

export default Home;

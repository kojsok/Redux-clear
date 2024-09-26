/* VENDOR */
import { useSelector } from "react-redux";

/* APPLICATION */
import { ListItem } from "./ListItem";
import { selectAllTasks } from "../store/tasksSlice";
import { RootState } from "../store/store";


export const TasksList: React.FC = () => {
//   const tasks = useSelector((state: RootState) => state.tasks);
const tasks = useSelector(selectAllTasks);

console.log(tasks);

// Добавляем проверку, чтобы tasks был массивом перед использованием map
if (!tasks || tasks.length === 0) {
    return <div>No tasks available</div>; // Или пустой компонент
  }

  return (
    <ul>
      { tasks.map((task) => (
        <ListItem key={task.id} item={task} />
      ))}
    </ul>
  );
};

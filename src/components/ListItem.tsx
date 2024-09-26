import { useDispatch } from "react-redux";
import { tasksAdded } from "../store/tasksSlice";

interface ListItemProps {
    item: {
        id: string;
        name: string;
        description: string;
        category?: string;
    };
}

export const ListItem: React.FC<ListItemProps> = ({ item }) => {

    const dispatch = useDispatch();

    return (
            <li className="list-item">
                <div className="list-item-col1">
                    <div className="list-item-col1-row1">
                        <h3 className="list-item-col1-row1__title">{item.name}</h3>

                    </div>
                    <div className="list-item-col1-row2">{item.description}</div>
                </div>
                <div className="list-item-col2">
                    <button
                        className="list-item-col2__btn"
                        onClick={() => {
                            console.log(item.id);
                            dispatch(
                                tasksAdded({
                                    id: item.id, // Assuming you want to use the existing item's id
                                    name: "Задача", // You can customize this with the relevant values
                                    description: "Задача которая добавляется по клику кнопки",
                                    category: "проверка", // You can customize this with the relevant value
                                })
                              );
                            
                        }}
                    >
                        ADD TASK
                    </button>
                </div>
            </li>
       
    );
};
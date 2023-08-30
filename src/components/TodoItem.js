import { useDispatch } from "react-redux";
import { deleteTodoItem, toggleTodoItem } from "./todoListSlice";
import { updateTodoTask } from "../api/todoApi";

const TodoItem = (props) => {
    const dispatch = useDispatch();

    const toggleItem = () => {
        if (props.isDone) {
            console.log("Go to details page");
        } else {
            dispatch(toggleTodoItem(props.todoItem.id));
        }
    };

    const deleteItem = () => {
        const isConfirmed = window.confirm(
            "Are you sure you want to delete this item?"
        );
        if (isConfirmed) {
            dispatch(deleteTodoItem(props.todoItem.id));
        }
    };

    const updateItem = () => {
        const updatedText = window.prompt("Enter the updated task text:", props.todoItem.text);
        if(updatedText != null){
            dispatch(updateTodoTask(props.todoItem.id, updatedText));
        }
    };

    return (
        <>
            <div className="todo-item">
                <span
                    className={
                        props.isDone ? "" : props.todoItem.done ? "done" : ""
                    }
                    onClick={toggleItem}
                >
                    {props.todoItem.text}
                </span>
                {props.isDone ? (
                    ""
                ) : (
                    <button className="delete-button" onClick={deleteItem}>
                        x
                    </button>

                     
                        
                )}
                <button className="update-button" onClick={updateItem}>
                            Update
                    </button>
            </div>
        </>
    );
};

export default TodoItem;

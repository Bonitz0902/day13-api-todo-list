import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from "./todoListSlice";
import * as todoApi from "../api/todoApi";


const TodoGenerator = () => {
    const [itemInput, setItemInput] = useState("");
    const dispatch = useDispatch();

    const onItemChange = (event) => {
        setItemInput(event.target.value);
    };

    const addItem = async () => {
        if (isValidInput()) {
            const response = await todoApi.createTodoTask({
                text: itemInput,
                done: false,
            });
            
            dispatch(addTodoItem(response.data));
            setItemInput("");
        } else {
            alert("Oops! It seems like your input is invalid. Please enter some text to continue.");
        }
    };

    const isValidInput = () => {
        return itemInput.trim() !== "";
    };

    return (
        <div>
            <input
                type="text"
                value={itemInput}
                onChange={onItemChange}
                className="item-input"
                placeholder="What are you going to do today?"
                id="itemInput"
            />
            <button onClick={addItem} className="add-button">
                Add
            </button>
        </div>
    );
};

export default TodoGenerator;

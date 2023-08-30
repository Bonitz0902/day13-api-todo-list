import { useDispatch, useSelector } from "react-redux";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import "./todoList.css";
import { useEffect } from "react";
import * as todoApi from "../api/todoApi.js"
import { addTodoItem,resetTodoTask } from "./todoListSlice";


const TodoList = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData(){
            const response = await todoApi.getTodoTasks();
            dispatch(resetTodoTask(response.data))
        }
        fetchData();
    }, [dispatch])


    const handleUpdateTodoTask = async (id, updatedTask) => {
        const updatedTodoItems = todoItems.map(todo => {
            if (todo.id === id) {
                return { ...todo, ...updatedTask };
            }
            return todo;
        });
    
        dispatch(resetTodoTask(updatedTodoItems));
    }

    const handleCreateTodo = async (newTodo) => {
        const response = await todoApi.createTodoTask(newTodo);
        dispatch(addTodoItem(response.data));
    };


    const todoItems = useSelector((state) => state.todoList.todoList);

    return (
        <>
            <h1>{props.isDone ? "Done Items": "Todo List"}</h1>
            <TodoGroup todoItems={todoItems} isDone={props.isDone} onUpdateTodoTask={handleUpdateTodoTask}/>
            <TodoGenerator handleCreateTodo={handleCreateTodo} />
        </>
    );
};


export default TodoList;

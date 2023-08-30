import { useSelector } from "react-redux/es/hooks/useSelector";
import TodoItem from "./TodoItem";

const TodoGroup = (props) => {

    const todoTasks = useSelector(state => state.todoList.todoList)
    return todoTasks.map((todoItem) => {
        return (
            <TodoItem
                todoItem={todoItem}
                key={todoItem.id}
                isDone={props.isDone}
            />
        );
    });
};

export default TodoGroup;
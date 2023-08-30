import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
    name: "todoList",
    initialState: {
        todoList: [],
    },
    reducers: {

        resetTodoTask: (state, action) => {
            state.todoList = action.payload
        },

        addTodoItem: (state, action) => {
            state.todoList.push(action.payload);
        },
        toggleTodoItem: (state, action) => {
            const todoItem = state.todoList.find(todoItem => todoItem.id === action.payload);
            todoItem.done = !todoItem.done;
        },
        deleteTodoItem: (state, action) => {
            const newTodoList = state.todoList.filter(todoItem => todoItem.id !== action.payload);
            state.todoList = newTodoList;
        },
    },
});

export const { addTodoItem, toggleTodoItem, deleteTodoItem, resetTodoTask } = todoListSlice.actions;
export default todoListSlice.reducer;

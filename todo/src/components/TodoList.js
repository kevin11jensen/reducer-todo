import React, {useReducer} from 'react';
import {initialState} from '../reducers/todoReducer';

const TodoList = () => {
    return (
        <div>
            <h5>Todo List</h5>
            {initialState.todo.map(todo => {
                console.log('todo list', todo);
                return <h4 key={todo.id}> Item: {todo.item}</h4>
            })}
        </div>
    );
};

export default TodoList;
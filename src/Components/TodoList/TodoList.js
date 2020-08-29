import React from 'react'
import Todo from '../Todo/Todo'

const TodoList = ({todos}) => {

    return (
        <>
            <div className="todo-container">
                <ul className="todo-list">
                {
                    todos.map((todo) => <Todo text={todo.text} key={todo.id}/>).slice(0, 10) // For limit
                }
                </ul>
            </div>
        </>
    )
}

export default TodoList;

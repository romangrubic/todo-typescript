import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import AddTodoForm from './components/Form/AddTodoForm';

const initialTodos: Array<Todo> = [
    { text: 'Walk the dog', complete: true },
    { text: 'Walk the dog', complete: false },
];

const App: React.FC = () => {
    const [todos, setTodos] = useState(initialTodos);

    const toggleTodo: ToggleTodo = (selectedTodo) => {
        const newTodos = todos.map((todo) => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete,
                };
            }
            return todo;
        });
        setTodos(newTodos);
    };
    const addTodo: AddTodo = (newTodo) => {
        newTodo.trim() !== '' &&
            setTodos([...todos, { text: newTodo, complete: false }]);
    };
    return (
        <React.Fragment>
            <AddTodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} />
        </React.Fragment>
    );
};

export default App;

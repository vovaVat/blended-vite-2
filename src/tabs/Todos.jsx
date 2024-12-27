import { useState } from 'react';
import Text from '../components/Text/Text';

const Todos = () => {
  const [todos, setTodos]= useState([]);

  const handleAddTodo = (text) => {
    const newTodo = { text, id: nanoid() };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  return (
    <div>
      <Form onSubmit={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;

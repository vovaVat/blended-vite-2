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
    </div>
  );
};

export default Todos;

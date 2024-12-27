import { useState } from 'react';
import Text from '../components/Text/Text';
import TodoList from '../components/TodoList/TodoList';
import { nanoid } from 'nanoid'
import Form from '../components/Form/Form';

const Todos = () => {
  const [todos, setTodos]= useState([]);

  const handleAddTodo = (text) => {
    const newTodo = { text, id: nanoid() };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  return (
    <div>
      <Text>no elements</Text>
      <Form onSubmit={handleAddTodo} />
      <TodoList todos={todos}/>
    </div>
  );
};

export default Todos;

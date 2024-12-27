import { useEffect, useState } from 'react';
import Text from '../components/Text/Text';
import TodoList from '../components/TodoList/TodoList';
import { nanoid } from 'nanoid'
import Form from '../components/Form/Form';

const Todos = () => {
  const [todos, setTodos]= useState(() => {
    const local= window.localStorage.getItem("todo");
    return local? JSON.parse(local) : []
  });

  useEffect(()=>{
    window.localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text) => {
    const newTodo = { text, id: nanoid() };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  const handleDelete =(id) => {
    setTodos((previous) => {
      return previous.filter((elem) => {
        return elem.id !== id
      });
    });
  }

  return (
    <div>
      <Form onSubmit={handleAddTodo} />
      <TodoList todos={todos} del={handleDelete}/>
    </div>
  );
};

export default Todos;

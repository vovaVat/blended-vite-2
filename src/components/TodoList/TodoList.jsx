import Grid from "../Grid/Grid"
import GridItem from "../GridItem/GridItem"
import TodoListItem from "../TodoListItem/TodoListItem"

const TodoList = ({todos, del}) => {
  return (
    <Grid>
  {todos.map(({text,id},num) => (
    <GridItem key={id}>
      <TodoListItem text={text} id={id} del={del} num={num}/>
    </GridItem>
  ))}
</Grid>
  );
};

export default TodoList;

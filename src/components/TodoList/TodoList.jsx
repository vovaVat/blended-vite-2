import Grid from "../Grid/Grid"
import GridItem from "../GridItem/GridItem"
import TodoListItem from "../TodoListItem/TodoListItem"

const TodoList = ({todos}) => {
  return (
    <Grid>
  {todos.map(({text,id}) => (
    <GridItem key={id}>
      <TodoListItem text={text}/>
    </GridItem>
  ))}
</Grid>
  );
};

export default TodoList;

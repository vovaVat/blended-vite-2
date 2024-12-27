const TodoList = () => {
  return (
    <Grid>
  {array.map(() => (
    <GridItem>
      <TodoListItem />
    </GridItem>
  ))}
</Grid>
  );
};

export default TodoList;

const TodoListItem = () => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #1
      </Text>
      <Text>Some description</Text>
      <button className={style.deleteButton} type="button">
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;

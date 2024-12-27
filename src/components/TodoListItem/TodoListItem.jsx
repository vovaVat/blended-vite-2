import Text from "../Text/Text"
import style from "./TodoListItem.module.css"

const TodoListItem = ({text}) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        {text}
      </Text>
      <Text>Some description</Text>
      <button className={style.deleteButton} type="button">
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;

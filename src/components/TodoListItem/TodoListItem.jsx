import Text from "../Text/Text"
import style from "./TodoListItem.module.css"
import { RiDeleteBinLine } from "react-icons/ri";

const TodoListItem = ({text, id, del, num}) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{num+1}
      </Text>
      <Text>{text}</Text>
      <button className={style.deleteButton} type="button" onClick={() => del(id)}>
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;

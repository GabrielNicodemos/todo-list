import { Check, Trash } from "phosphor-react";
import styles from "./Todo.module.css";

interface TodoProps {
  id: string;
  completed: boolean;
  content: string;
  onDeleteTodo: (id: string) => void;
  onCompletedTodo: (id: string) => void;
}

const Todo = ({ id ,completed, content, onDeleteTodo, onCompletedTodo}: TodoProps) => {

  function handleDeleteTodo() {
    onDeleteTodo(id);
  }

  function handleCompletedTodo() {
    onCompletedTodo(id);
  }

  return (
    <div className={styles.container}>
      <div className={completed ? styles.checked : styles.unchecked} onClick={handleCompletedTodo} >
        {completed && <Check size={20} weight="bold" color="#fff" />}
      </div>
      <p className={completed ? styles.contentChecked : styles.content}>{content}</p>
      <button title="Deletar tarefa" onClick={handleDeleteTodo}>
        <Trash size={28} />
      </button>
    </div>
  );
};

export default Todo;

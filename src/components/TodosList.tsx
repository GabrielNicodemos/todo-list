import { ClipboardText } from "phosphor-react";
import Todo from "./Todo";
import styles from "./TodoList.module.css";
import { v4 as uuidv4 } from "uuid";

import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

const TodosList = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      content:
        "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      completed: false,
    },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const todosCompleted = todos.filter((todo) => {
    return todo.completed !== false;
  });

  function handleAddNewTodo(event: FormEvent) {
    event.preventDefault();
    const addTodo = {
      id: uuidv4(),
      content: newTodo,
      completed: false,
    };
    setTodos([...todos, addTodo]);
    setNewTodo("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTodo(event.target.value);
  }

  function handleNewTodoInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigátorio!");
  }

  function daleteTodo(idTodo: String) {
    const todosWithDeletedOne = todos.filter((todo) => {
      return todo.id !== idTodo;
    });
    setTodos(todosWithDeletedOne);
  }

  function completedTodo(idTodo: String) {
    const newTodosUpdate = todos.map((todo) => {
      if (todo.id === idTodo) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(newTodosUpdate);
  }

  return (
    <div className={styles.container}>
      <form className={styles.formInput} onSubmit={handleAddNewTodo}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTodo}
          onChange={handleNewCommentChange}
          name="newTodo"
          onInvalid={handleNewTodoInvalid}
          required
        />
        <button type="submit">
          Criar <PlusCircle size={24} className={styles.iconBtn} />
        </button>
      </form>

      <div className={styles.content}>
        <header>
          <p>
            Tarefas Criadas <span>{todos.length}</span>
          </p>
          <p>
            Concluídas{" "}
            <span>
              {todosCompleted.length} de {todos.length}
            </span>
          </p>
        </header>
        <div className={styles.todos}>
          <div>
            {todos.length > 0 && (
              <div className={styles.todoList}>
                {todos &&
                  todos.map((todo) => {
                    if (todo.completed === false) {
                      return (
                        <Todo
                          key={todo.id}
                          id={todo.id}
                          content={todo.content}
                          completed={todo.completed}
                          onDeleteTodo={daleteTodo}
                          onCompletedTodo={completedTodo}
                        />
                      );
                    }
                  })}
              </div>
            )}
            {todos.length > 0 && (
              <div className={styles.todoList}>
                {todos &&
                  todos.map((todo) => {
                    if (todo.completed) {
                      return (
                        <Todo
                          key={todo.id}
                          id={todo.id}
                          content={todo.content}
                          completed={todo.completed}
                          onDeleteTodo={daleteTodo}
                          onCompletedTodo={completedTodo}
                        />
                      );
                    }
                  })}
              </div>
            )}

            {todos.length === 0 && (
              <div className={styles.todoListEmpaty}>
                <ClipboardText size={80} color="gray" />
                <h2>Você ainda não tem tarefas cadastradas</h2>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodosList;

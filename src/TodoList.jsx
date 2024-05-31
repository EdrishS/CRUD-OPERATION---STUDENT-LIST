import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggelTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length == 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            toggelTodo={toggelTodo}
            deleteTodo={deleteTodo}
            key={todo.id}
          />
        );
      })}
    </ul>
  );
}

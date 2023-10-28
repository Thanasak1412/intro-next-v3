import { TodoProps } from '@/types/todo';
import Todo from './Todo';

type Props = {
  todos: TodoProps[];
};

export default function TodoList({ todos }: Props) {
  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
}

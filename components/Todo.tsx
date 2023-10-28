import { TodoProps } from '@/types/todo';

export default function Todo({ todo }: { todo: TodoProps }) {
  return (
    <div>
      <h2>{todo.content}</h2>
    </div>
  );
}

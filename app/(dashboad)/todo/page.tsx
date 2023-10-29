// utils
import db from '@/utils/db';
import { delay } from '@/utils/helper';
// components
import TodoList from '@/components/TodoList';

const getTodoList = async () => {
  await delay(2000);
  const todoList = await db.todo.findMany();

  return todoList;
};

export default async function TodoPage() {
  const todos = await getTodoList();

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
}

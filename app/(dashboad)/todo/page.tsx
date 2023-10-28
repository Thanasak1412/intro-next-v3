// utils
import db from '@/utils/db';
// components
import TodoList from '@/components/TodoList';

const getTodoList = async () => {
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

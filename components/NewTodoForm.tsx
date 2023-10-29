import { newTodo } from '@/utils/actions';

export default function NewTodoForm() {
  return (
    <form action={newTodo} className="flex flex-col gap-3">
      <input
        type="text"
        name="content"
        className="text-lg text-gray-600 border border-black/25 py-2 px-4 rounded outline-none"
      />
      <button type="submit" className="w-6/12 border border-white rounded py-2 px-4 mx-auto">
        Create
      </button>
    </form>
  );
}

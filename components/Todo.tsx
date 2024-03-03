'use client';

import { useTransition } from 'react';

// types
import { TodoProps } from '@/types/todo';
// utils
import { updateCompleted } from '@/utils/actions';

export default function Todo({ todo }: Readonly<{ todo: TodoProps }>) {
  const [_, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => updateCompleted(todo.id));
  };

  return (
    <div
      onClick={handleClick}
      className={`border border-black cursor-pointer hover:text-gray-300 ${
        todo.completed ? 'line-through text-gray-600' : ''
      }`}
    >
      <h2>{todo.content}</h2>
    </div>
  );
}

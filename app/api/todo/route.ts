import db from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const todo = await db.todo.findMany();

  return NextResponse.json({
    data: todo,
  });
};

export const POST = async (req: Request) => {
  const data = await req.json();

  const { id } = await db.todo.create({
    data,
  });

  const todo = await db.todo.findUnique({
    where: { id },
  });

  return NextResponse.json({
    status: true,
    message: 'successful',
    data: todo,
  });
};

import NewTodoForm from '@/components/NewTodoForm';

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div>
        <h1>Todo</h1>
      </div>
      <div className="w-6/12">
        <NewTodoForm />
      </div>
      {children}
    </div>
  );
}

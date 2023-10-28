type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <>
      Dashboard layout
      {children}
    </>
  );
}

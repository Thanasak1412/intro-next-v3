type Props = {
  children: React.ReactNode;
};

export default function TodoLayout({ children }: Readonly<Props>) {
  return (
    <div>
      To do layout
      {children}
    </div>
  );
}

type Props = {
  children: React.ReactNode;
};

export default function TodoLayout({ children }: Props) {
  return (
    <div>
      To do layout
      {children}
    </div>
  );
}

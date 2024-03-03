type Props = {
  params: { id: string };
};

export default function DocPage({ params }: Readonly<Props>) {
  return (
    <>
      <h1>DocPage</h1>
      <h2>Id: {params.id}</h2>
    </>
  );
}

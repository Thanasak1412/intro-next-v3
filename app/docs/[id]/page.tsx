type Props = {
  params: { id: string };
};

export default function DocPage({ params }: Props) {
  return (
    <>
      <h1>DocPage</h1>
      <h2>Id: {params.id}</h2>
    </>
  );
}

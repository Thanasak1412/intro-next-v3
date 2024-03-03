export default function UsersPage({ params }: Readonly<{ params: { slug: string } }>) {
  console.log('params => ', params);

  return <h1>Users Page: {params.slug}</h1>;
}

import Link from 'next/link';
// lib
import { getUsers, getUser } from '../../../../lib/user';

type Props = {
  params: {
    slug: string;
  };
};

export default async function UserPage({ params }: Props) {
  const { slug } = params;
  const { data } = await getUser(slug);

  return (
    <div>
      Users page
      <h2>
        Name: {data?.first_name} {data?.last_name}
      </h2>
      <h2>Email: {data?.email}</h2>
      <Link href="/users">Users</Link>
    </div>
  );
}

export async function generateStaticParams() {
  const { data } = await getUsers();

  return data?.map((user) => ({
    slug: `${user.first_name}-${user.last_name}`,
  }));
}

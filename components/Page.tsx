import Head from 'next/head';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
};

export default function Page({ children, title = '' }: Readonly<Props>) {
  return (
    <>
      <Head>
        <title>{`${title} | Page`}</title>
      </Head>

      <div>{children}</div>
    </>
  );
}

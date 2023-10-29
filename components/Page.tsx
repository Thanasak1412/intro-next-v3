import Head from 'next/head';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  meta?: ReactNode;
  title: string;
};

export default function Page({ children, title = '', meta }: Props) {
  return (
    <>
      <Head>
        <title>{`${title} | Page`}</title>
      </Head>

      <div>{children}</div>
    </>
  );
}

'use client';

import Page from '@/components/Page';
import Link from 'next/link';

export default function TodoErrorPage() {
  return (
    <Page title="500 Internal Server Error">
      <div className="h-screen flex flex-col justify-center items-center gap-4">
        <div>
          <h3 className="text-3xl">500 Internal Server Error</h3>
        </div>

        <div>
          <p className="text-xl">There was an error, please try again later</p>
        </div>

        <Link href="/" passHref>
          <button className="border-2 border-sky-500 rounded text-slate-300 shadow-gray-800 py-2 px-4 hover:bg-slate-500">
            Go to Home
          </button>
        </Link>
      </div>
      <div className="flex flex-1" />
    </Page>
  );
}

import Image from 'next/image';

export default function Logo() {
  return <Image src="/next.svg" width={60} height={60} className="cursor-pointer" alt="logo" />;
}

import Counter from '@/components/Counter';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <h1>홈페이지다!! 버전2</h1>
      <Counter />
      <Image src='https://images.unsplash.com/photo-1441986300917-64674bd600d8' alt='shop' width={400} height={400} />
    </>
  );
}


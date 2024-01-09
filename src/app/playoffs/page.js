import styles from '../page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <Link href="/">
            <p>Home</p>
          </Link>
        </div>
        &nbsp; &nbsp;
        <div>
          <Link href="/group-stage">
            <p>Group Stage</p>
          </Link>
        </div>
      </div>
      <div className={styles.center}>
        <Image
          src="/bg.png"
          alt="Tournament bracket"
          width={1024}
          height={576}
          priority
        />
      </div>
    </main>
  );
}

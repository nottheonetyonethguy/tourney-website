import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <Link href="/">
            <p>Home</p>
          </Link>
        </div>
      </div>
      <div className={styles.center}>
        <Image
          src="/logo.png"
          alt="Aero Chess Tournament"
          width={600}
          height={185}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link
          href="/group-stage"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Group Stage <span>-&gt;</span>
          </h2>
          <p>Group Stage of the tournament.</p>
        </Link>
        <h2>&nbsp;</h2>
        <h2>&nbsp;</h2>

        <Link
          href="/playoffs"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Playoffs <span>-&gt;</span>
          </h2>
          <p>Playoffs with best of 3 and best of 5 rounds.</p>
        </Link>
      </div>
    </main>
  );
}

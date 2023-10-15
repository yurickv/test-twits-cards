import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Home page</h1>
        <Link href="/tweets" className={styles.center}>
          Go to tweets{" "}
        </Link>
      </div>
    </main>
  );
}

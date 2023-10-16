import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { AiFillIdcard } from "react-icons/ai";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Home page</h1>
        <Link href="/tweets" className={styles.goButton}>
          Go to tweets <AiFillIdcard size="3rem" />
        </Link>
      </div>
    </main>
  );
}

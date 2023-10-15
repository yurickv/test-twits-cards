import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { TweetsList } from "../components/TweetsList/TweetsList";

export default function Twits() {
  return (
    <main className={styles.box}>
      <div>
        <div className={styles.center}>
          <FiArrowLeft />
          <Link href="/">Go back Home </Link>
        </div>
      </div>
      <div className={styles.center}>
        <TweetsList />
      </div>
    </main>
  );
}

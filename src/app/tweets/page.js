import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { TweetsList } from "../components/TweetsList/TweetsList";

export default function Twits() {
  return (
    <main className={styles.box}>
      <div className={styles.goBackLink}>
        <Link href="/">
          <FiArrowLeft /> Go back Home{" "}
        </Link>
      </div>

      <div className={styles.center}>
        <TweetsList />
      </div>
    </main>
  );
}

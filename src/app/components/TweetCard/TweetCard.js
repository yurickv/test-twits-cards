"use client";
import { useState } from "react";
import styles from "./TweetCard.module.css";
import Image from "next/image";
import IconGoIT from "../IconGoIT/IconGoIT";

export const TweetCard = ({ id, avatar, followers, tweets }) => {
  const [follower, setFollower] = useState(Number(followers));
  const [isFollow, setIsFollow] = useState(false);
  const handleOnFollow = (evt) => {
    if (isFollow) {
      setIsFollow(false);
      setFollower(follower - 1);
      return;
    }
    setFollower(follower + 1);
    setIsFollow(true);
  };
  return (
    <div className={styles.card} key={id}>
      <IconGoIT />
      <div className={styles.bgImage}></div>
      <div className={styles.info}>
        <div className={styles.user}>
          <div className={styles.imageThumb}>
            <div className={styles.imageBox}>
              <img src="/Hansel.png" alt="user-img" />
            </div>
          </div>
        </div>
        <div className={styles.textBox}>
          <p className={styles.text}> {tweets} tweets</p>
          <p className={styles.text}> {follower} Followers</p>
          <button
            onClick={handleOnFollow}
            className={styles.button}
            style={{ backgroundColor: isFollow ? "#5CD3A8" : "#EBD8FF" }}
          >
            {isFollow ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
};
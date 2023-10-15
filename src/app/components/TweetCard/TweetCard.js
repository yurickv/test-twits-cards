"use client";
import { useState } from "react";
import styles from "./TweetCard.module.css";
import Image from "next/image";
import IconGoIT from "../IconGoIT/IconGoIT";
import { separateComma } from "@/service/helpers";

export const TweetCard = ({ follow, followers, tweets, avatar, id }) => {
  const [follower, setFollower] = useState(Number(followers));
  const [isFollow, setIsFollow] = useState(follow);
  const handleOnFollow = (evt) => {
    if (isFollow) {
      setIsFollow(false);
      setFollower(follower - 1);
      return;
    }
    setFollower(follower + 1);
    setIsFollow(true);
  };
  let folowersToSeparate = separateComma(follower);
  return (
    <div className={styles.card}>
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
          <p className={styles.text}>{folowersToSeparate} Followers</p>
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

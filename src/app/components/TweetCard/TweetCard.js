"use client";
import { useState } from "react";
import styles from "./TweetCard.module.css";
import Image from "next/image";
import IconGoIT from "../IconGoIT/IconGoIT";
import { separateComma } from "@/service/helpers";
import { changeFaworite } from "@/service/axios";

export const TweetCard = ({ follow, followers, tweets, avatar, id, user }) => {
  const [follower, setFollower] = useState(Number(followers));
  const [isFollow, setIsFollow] = useState(follow);

  let userData = {
    follow: `${follow}`,
    followers: `${followers}`,
    tweets: `${tweets}`,
    avatar: `${avatar}`,
    id: `${id}`,
    user: `${user}`,
  };

  const handleOnFollow = (evt) => {
    if (isFollow) {
      setIsFollow(false);
      setFollower(follower - 1);
      userData.follow = false;
      userData.followers = Number(followers) - 1;
      changeFaworite(id, userData);
      return;
    }

    setFollower(follower + 1);
    setIsFollow(true);
    userData.follow = true;
    userData.followers = Number(followers) + 1;
    changeFaworite(id, userData);
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

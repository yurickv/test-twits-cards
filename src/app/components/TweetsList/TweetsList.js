"use client";

import { fetchCards } from "@/sevrvice/axios";
import styles from "./TweetsList.module.css";
import { useState, useEffect } from "react";
import { TweetCard } from "../TweetCard/TweetCard";

export const TweetsList = () => {
  const [users, setUsers] = useState([]);
  const [error, setSetError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCards();
        setUsers(data);
      } catch (error) {
        setSetError(error);
      }
    };
    fetchData();
  }, []);
  return (
    <ul className={styles.list}>
      {users.map(({ id, name, avatar, followers, tweets }) => (
        <li key={id}>
          <TweetCard avatar={avatar} followers={followers} tweets={tweets} />
        </li>
      ))}
    </ul>
  );
};

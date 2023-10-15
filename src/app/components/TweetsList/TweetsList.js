"use client";

import { fetchCards } from "@/service/axios";
import styles from "./TweetsList.module.css";
import { useState, useEffect } from "react";
import { TweetCard } from "../TweetCard/TweetCard";

export const TweetsList = () => {
  const [users, setUsers] = useState([]);
  const [error, setSetError] = useState(null);
  const [page, setPage] = useState(1);
  const [isNextPage, setIsNextPage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCards(page);
        setUsers(data);

        const setUsersNext = await fetchCards(page + 1);
        setUsersNext.length !== 0 ? setIsNextPage(true) : setIsNextPage(false);
      } catch (error) {
        setSetError(error);
      }
    };
    fetchData();
  }, [page]);

  const loadMore = () => {
    const cardHeight = 460;
    const cardsToAdd = 6;
    setPage((prevPage) => prevPage + 1);

    setTimeout(() => {
      window.scrollBy(0, cardHeight * cardsToAdd);
    }, 500);
  };

  let arreyOfUsers = false;
  if ((users.length = 3)) arreyOfUsers = true;

  return (
    <section className={styles.section}>
      {error ? <h1>Something vent wrong, reload page</h1> : ""}
      <ul className={styles.list}>
        {users.map(({ id, follow, avatar, followers, tweets, user }) => (
          <li key={id}>
            <TweetCard
              avatar={avatar}
              followers={followers}
              tweets={tweets}
              follow={follow}
              id={id}
              user={user}
            />
          </li>
        ))}
      </ul>
      {isNextPage ? (
        <button onClick={loadMore} className={styles.loadMore}>
          LOAD MORE
        </button>
      ) : (
        ""
      )}
    </section>
  );
};

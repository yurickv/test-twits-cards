"use client";
import { Dna } from "react-loader-spinner";
import { fetchCards } from "@/service/axios";
import styles from "./TweetsList.module.css";
import { useState, useEffect } from "react";
import { TweetCard } from "../TweetCard/TweetCard";
import { filterOptions } from "@/service/constants";

export const TweetsList = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setSetError] = useState(null);
  const [page, setPage] = useState(1);
  const [isNextPage, setIsNextPage] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(filterOptions[0]);
  // const [filter, setFilter] = useState("all");

  // const handleFilterChange = (option) => {
  //   setSelectedOption(option);
  //   setFilter(option.value);
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchCards(page);
        setUsers(data);

        const setUsersNext = await fetchCards(page + 1);
        setUsersNext.length !== 0 ? setIsNextPage(true) : setIsNextPage(false);
        setLoading(false);
      } catch (error) {
        setSetError(error);
        setLoading(false);
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
      {loading ? <Dna height={200} width={200} /> : ""}
      {error ? <h1>Something vent wrong, reload page</h1> : ""}
      {/* <select
        name="selectedFruit"
        className={styles.select}
        onChange={handleFilterChange}
        value={selectedOption}
      >
        {filterOptions.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select> */}

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

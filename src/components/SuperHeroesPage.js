import axios from "axios";
import React from "react";
import { useQuery, useQueryClient } from "react-query";

const getSuperHeroData = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const SuperHeroesPage = () => {
  const queryClient = useQueryClient();

  //Retrieve the friends data from the cache
  const friendsData = queryClient.getQueryData("friends-series");

  const { isLoading, data } = useQuery("super-heroes", getSuperHeroData);

  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <div style={{ marginLeft: "4rem" }}>
      <h2>This is Super Heroes Page</h2>
      <ul>
        {data?.data.map((hero) => {
          return (
            <li style={{ margin: "1rem" }} key={hero.id}>
              {hero.name}
            </li>
          );
        })}
      </ul>
      <ul>
        {friendsData &&
          friendsData.data.map((char) => {
            return (
              <li style={{ margin: "1rem" }} key={char.id}>
                {char.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SuperHeroesPage;

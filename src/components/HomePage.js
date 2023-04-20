import axios from "axios";
import React from "react";
import { useQuery, useQueryClient } from "react-query";

const getFriendsData = () => {
  return axios.get("http://localhost:4000/friends");
};

const HomePage = () => {
  const queryClient = useQueryClient();

  const { isLoading, data } = useQuery("friends-series", getFriendsData, {
    onSuccess: (data) => {
      // Store the friends data in the cache
      queryClient.setQueryData("friends-series", data);
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ marginLeft: "4rem" }}>
      <h2>Friends Charachters</h2>
      <ul>
        {data?.data.map((char) => {
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

export default HomePage;

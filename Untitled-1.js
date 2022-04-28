
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_ENTRIES = gql`
  {
    allEntries {
      id
      clockIn
      clockIn
      userName
    }
  }
`;

const Entries = () => {
  const { loading, error, data } = useQuery(GET_ENTRIES, {
    fetchPolicy: "no-cache",
  });

  // if (loading) return "...Loading";
  if (error) return `Error: ${error.message}`;
  console.log("data", data);
  return (
    <div>
      {data?.allEntries.map((entry) => {
        return (
          <div key={entry.id}>
            <p> UserName: {entry.username}</p>
            <p> Clocked In: {entry.clockIn}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Entries;
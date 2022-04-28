import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import gql from "graphql-tag";
import EntryCard from "./EntryCard";

const GET_ENTRIES = gql`
  {
    allEntries {
      id
      clockIn
      clockOut
      userName
    }
  }
`;

const CLOCK_OUT = gql`
  mutation completeEntry($clockOut: String, $entryId: ID!) {
    completeEntry(input: { clockOut: $clockOut, entryId: $entryId }) {
      id
      clockIn
      clockOut
    }
  }
`;

const Entries = () => {
  const { loading, error, data } = useQuery(GET_ENTRIES);
  //   const [clockIn] = useMutation(CREATE_ENTRY);
  const [clockOut] = useMutation(CLOCK_OUT);

  if (loading) return "...Loading";
  if (error) return `Error: ${error.message}`;
  const newestEntriesFirst = [...data?.allEntries].reverse();
  return (
    <div style={{ marginBottom: 50 }}>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        ALL ENTRIES
      </h1>
      {newestEntriesFirst.map((entry) => {
        return (
          <EntryCard key={entry.id} entry={entry} handleClick={clockOut} />
        );
      })}
    </div>
  );
};

export default Entries;

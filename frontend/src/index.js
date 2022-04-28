import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entries from "./components/Entries";
import NavBar from "./components/NavBar";
import NewEntry from "./components/NewEntry";
import EditEntry from "./components/EditEntry";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

// const EditEntry = () => <div> EditEntry </div>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/entries/new" element={<NewEntry />} />
        <Route path="/entries/:id/edit" element={<EditEntry />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

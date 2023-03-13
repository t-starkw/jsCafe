import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Thanks from "./pages/Thanks";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./styles/App.css";

// apollo client configuration
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <ApolloProvider client={client}>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/order" element={<Order />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/thanks" element={<Thanks />} />
            </Routes>
          </div>
        </ApolloProvider>
      </div>
    </>
  );
}

export default App;

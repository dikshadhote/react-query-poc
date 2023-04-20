import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";
import HomePage from "./components/HomePage";
import RQSuperHeroesPage from "./components/RQSuperHeroPage";
import SuperHeroesPage from "./components/SuperHeroesPage";
import React, { createContext } from "react";

export const FriendsContext = createContext();

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul style={{ display: "flex" }}>
              <li style={{ margin: "2rem" }}>
                <Link to="/">Home</Link>
              </li>
              <li style={{ margin: "2rem" }}>
                <Link to="/super-heroes"> Super Heroes</Link>
              </li>
              <li style={{ margin: "2rem" }}>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/super-heroes" element={<SuperHeroesPage />}></Route>
            <Route
              path="/rq-super-heroes"
              element={<RQSuperHeroesPage />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

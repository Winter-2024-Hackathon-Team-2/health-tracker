import React, { useState } from "react";
import { listStrategies } from "../utils/api";
import { useLocation } from "react-router-dom";
import StrategiesList from "./StrategiesList";

//user can search for coping strategies

export default function StrategiesSearch() {
  const [strategies, setStrategies] = useState([]);
  const [strategyType, setStrategyType] = useState("");

  //updates url to include search params
  
  const location = useLocation();
  const queryParams = new URLSearchParams({ strategy: strategyType });
  location.search = queryParams.toString();

  //TODO update so that Not Found text renders only after user searches
  function displayStrategies(strategies) {
    if (strategies.length) {
      return (
        <div>
          <StrategiesList strategies={strategies} />
        </div>
      );
    } else {
      return <p>No strategies were found, try searching for another term.</p>;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const abortController = new AbortController();
    listStrategies({ strategy: strategyType }, abortController.signal)
      .then(setStrategies)
      .catch((error) => console.log(error.message));
    return () => abortController.abort();
  }


  function handleChange({ target }) {
    setStrategyType(target.value);
  }


  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="strategyType">
            <input
              id="strategyType"
              name="strategyType"
              type="search"
              placeholder="Search for coping strategies"
              value={strategyType}
              onChange={handleChange}
              required
            ></input>
            <button type="submit">Search</button>
          </label>
        </form>
        <div>{displayStrategies(strategies)}</div>
      </section>
    </>
  );
}

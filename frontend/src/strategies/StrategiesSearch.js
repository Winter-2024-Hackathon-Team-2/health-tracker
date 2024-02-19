import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { listStrategies } from "../utils/api";
import StrategiesList from "./StrategiesList";

//TODO Add routing to this component in routing file. Path should be /strategies/search

export default function StrategiesSearch() {
//   let strategy;
  const [strategies, setStrategies] = useState([]);
  const [strategiesError, setStrategiesError] = useState(null);
  const [strategyType, setStrategyType] = useState("");
//   const location = useLocation();
//   const query = location.search;


  //checks if the route includes a query parameter
//   if (query) {
//     const queryParams = new URLSearchParams(query);
//     strategy = queryParams.get("strategy");
//   }

  function loadStrategies() {
    const abortController = new AbortController();
    listStrategies({strategy: strategyType}, abortController.signal)
      .then(setStrategies)
      .catch(setStrategiesError);
    return () => abortController.abort();
  }

  function displayStrategies(strategies){
    if (strategies.length){
        return (
            <div>
                <StrategiesList strategies={strategies}/>
            </div>
        )
    } else {
        return (
            <p>No strategies were found.</p>
        )
    }
  }

  return (
    <>
    <section>
        <form>
            <label htmlFor="strategyType">Search
                <input id="strategyType" name="strategyType" type="search" placeholder="Search for coping stragies" required></input>
                <button type="submit">Search</button>
            </label>
        </form>
        <div>
            {displayStrategies(strategies)}
        </div>
    </section>
    </>
  )
}

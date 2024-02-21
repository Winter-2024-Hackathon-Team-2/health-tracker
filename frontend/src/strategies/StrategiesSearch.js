import React, { useState, useEffect } from "react";
import { listStrategies } from "../utils/api";
import StrategiesList from "./StrategiesList";

//user can search for coping strategies

export default function StrategiesSearch() {
  const [strategies, setStrategies] = useState([]);
  const [strategiesError, setStrategiesError] = useState(null);
  const [filteredData, setFilteredData] = useState(strategies)
  const [strategyFilter, setStrategyFilter] = useState("");

  function handleChange({ target }) {
    setStrategyFilter(target.value);
  }

  useEffect(loadStrategies, []);

  function loadStrategies() {
    const abortController = new AbortController();
    listStrategies(abortController.signal)
      .then(setStrategies)
      .catch(setStrategiesError);
    return abortController.abort();
  }


  //resets to display all strategies, clears search field
  function reset(e){
    e.preventDefault();
    setFilteredData(strategies)
    setStrategyFilter("")
  }

//filters data, useEffect used to rerender on change of strategies or strategyFilter
  useEffect(() => {
    setFilteredData(strategies.filter((strategy) => {
      let strategy_type = strategy.strategy_type.toLowerCase();
      let description = strategy.strategy_description.toLowerCase();
      return (strategy_type.includes(strategyFilter.toLowerCase()) || description.includes(strategyFilter.toLowerCase()))
    }));
  }, [strategies, strategyFilter])


  return (
    <>
      <section>
        <form>
          <label htmlFor="strategyFilter">
            <input
              id="strategyFilter"
              name="strategyType"
              type="text"
              placeholder="Filter"
              value={strategyFilter}
              onChange={handleChange}
              required
            ></input>
            <button onClick={reset}>Reset</button>
          </label>
        </form>
      {strategiesError && <p>{strategiesError.message}</p>}
       {strategyFilter ? <StrategiesList strategies={filteredData} /> : <StrategiesList strategies={strategies} />}
      </section>
    </>
  );
}

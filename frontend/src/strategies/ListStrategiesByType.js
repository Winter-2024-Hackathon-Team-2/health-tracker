import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { listStrategiesByType } from "../utils/api";
import StrategiesList from "./StrategiesList";
import StrategiesCarousel from "./StrategiesCarousel";

//Lists personalized strategies based on user's survey input

export default function ListStrategiesByType() {
  const [strategies, setStrategies] = useState([]);
  const { strategyType } = useParams();

  function loadStrategies() {
    const abortController = new AbortController();
    listStrategiesByType(strategyType, abortController.signal)
      .then(setStrategies)
      .catch(console.error);
    return () => abortController.abort();
  }

  useEffect(loadStrategies, [strategyType]);

  /*If user survey has not been completed, place holder text instructs
    user to complete survey for personalized strategies, and provides
    link to search for a strategy
  */

  if (strategies.length) {
    return (
      <>
      <section className="flex flex-col item-center text-center">
      <h3 className="text-3xl">Welcome Back</h3>
      <p>Based on your survey, we've provided suggestions for {strategyType}.</p>
        <StrategiesCarousel strategies={strategies} />
        </section>
      </>
    );
  } else {
    return (
      <>
      <section>
        <h3>
          No strategy suggestions found. If you would like personalized
          suggestions, please complete the daily survey, otherwise, search for a
          strategy.
        </h3>
        <Link to="/strategies">Browse for Coping Strategies</Link>
        </section>
      </>
    );
  }
}

import React, { useEffect } from "react";
import { useParams, useLocation, useParams } from "react-router-dom";
import { listStrategiesByType } from "../utils/api";

export default function StrategiesList() {
  let strategy;
  const location = useLocation();
  const { strategyType } = useParams();
  const query = location.search;
  const [strategies, setStrategies] = useState([]);

  if (query) {
    const queryParams = new URLSearchParams(query);
    strategy = queryParams.get("strategy");
  }

  useEffect(() => {});
}

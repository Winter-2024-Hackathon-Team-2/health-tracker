import React, { useEffect } from "react";
import { useParams, useLocation, useParams } from "react-router-dom";
import { listStrategiesByType } from "../utils/api";

export default function StrategiesList({strategies}) {
  const { strategyType } = useParams();
  const [strategies, setStrategies] = useState([]);


  useEffect(() => {});
}

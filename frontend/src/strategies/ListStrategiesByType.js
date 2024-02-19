import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { listStrategiesByType } from "../utils/api";
import StrategiesList from "./StrategiesList";


export default function ListStrategiesByType(){
    const [strategies, setStrategies] = useState([]);
    const { strategyType } = useParams();
    
    function loadStrategies(){
        const abortController = new AbortController();
        listStrategiesByType(strategyType, abortController.signal)
        .then(setStrategies)
        .catch(console.error)
        return () => abortController.abort();
    }
    
    useEffect(loadStrategies, [strategyType])
    console.log(strategies)

    return (
        <>
        <StrategiesList strategies={strategies} />
        </>
    )
}
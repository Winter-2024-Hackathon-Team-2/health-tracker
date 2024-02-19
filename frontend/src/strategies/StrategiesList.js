import React, { useEffect } from "react";


export default function StrategiesList({strategies}) {

  const strategiesDisplay = strategies.map((strategy) => {
    return (
        <li>
            <h3>{strategy.strategy_description}</h3>
            <img src={strategy.strategy_photo} alt={strategy.description} width="400"/>
            <a href={strategy.strategy_article}>Article</a>
        </li>
    )
  })

  return (
    <>
    <section>
        <ul>
            {strategiesDisplay}
        </ul>
    </section>
    </>
  )
}

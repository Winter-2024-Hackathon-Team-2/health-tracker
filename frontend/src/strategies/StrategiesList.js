import React from "react";

export default function StrategiesList({ strategies }) {
  const strategiesDisplay = strategies.map((strategy) => {
    return (
      <li key={strategy.strategy_id}>
        <h3>{strategy.strategy_description}</h3>
        {strategy.strategy_photo && (
          <img
            src={strategy.strategy_photo}
            alt={strategy.description}
            width="400"
            height="235"
          />
        )}
        {strategy.strategy_video && (
          <iframe
            src={strategy.strategy_video}
            title={strategy.description}
            width="400"
            height="235"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
        <a href={strategy.strategy_article}>Article</a>
      </li>
    );
  });

  return (
    <>
      <section>
        <ul>{strategiesDisplay}</ul>
      </section>
    </>
  );
}

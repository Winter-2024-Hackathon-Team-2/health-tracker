import React from "react";

//simple list component that handles how the strategies are rendered

export default function StrategiesList({ strategies }) {


  const strategiesDisplay = strategies.map((strategy) => {
    return (
      <li key={strategy.strategy_id} className="flex flex-col items-center justify-center my-4">
        <h3 className="text-xl py-2 text-center">{strategy.strategy_description}</h3>
        <a href={strategy.strategy_article} className="">Learn More</a>
        {strategy.strategy_photo && (
          <img
            src={strategy.strategy_photo}
            alt={strategy.description}
            width="400"
            height="235"
            className="py-2"
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
      </li>
    );
  });


  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <ul className="grid grid-cols-3  gap-x-3 items-end justify-center">{strategiesDisplay}</ul>
      </section>
    </>
  );
}

import React from "react";

//simple list component that handles how the strategies are rendered

export default function StrategiesList({ strategies }) {
  const strategiesDisplay = strategies.map((strategy) => {
    return (
      <li key={strategy.strategy_id} className="justify-center item-center content-center">
        <div className="card card-compact w-96 bg-base-100 bg-dark-purple shadow-xl">
          <figure>
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
          </figure>
          <div className="card-body">
            <a href={strategy.strategy_article} className="hover:text-pale-yellow text-center text-off-white"><h3>{strategy.strategy_description}</h3></a>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
      </li>
    );
  });

  return (
    <>
      <section className="">
        <ul className="grid grid-cols-2  gap-x-1 gap-y-8 justify-items-center items-stretch content-center my-2">
          {strategiesDisplay}
        </ul>
      </section>
    </>
  );
}

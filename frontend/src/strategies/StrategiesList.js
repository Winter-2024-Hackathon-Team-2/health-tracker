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
      <section className="flex place-content-center">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-16 xl:gap-x-24 gap-y-8 xl:gap-y-20 max-w-screen-lg justify-items-center items-stretch content-center my-2">
          {strategiesDisplay}
        </ul>
      </section>
    </>
  );
}

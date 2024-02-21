import React from 'react'

function StrategiesCarousel({strategies}) {
  
  const strategiesTest = strategies.map((strategy, index)=>{
  return (
    
        <div id={`item${index}`} className="carousel-item w-full flex flex-col items-center">
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
        </div> 
  )
})


const carouselNumbers = strategies.map((strategy, index)=>{   
        return <a href={`#item${index}`} className="btn btn-xs">{`${index + 1}`}</a>    
})

return(
<div>
    <div className="carousel w-full">
        {strategiesTest}
    </div>
    <div className="flex justify-center w-full py-2 gap-2">
        {carouselNumbers}
    </div>
</div> 
)
}

export default StrategiesCarousel
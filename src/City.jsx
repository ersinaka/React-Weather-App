import React from "react";
import windgif from "./assets/wind.gif"

const City = ({ city }) => {
  console.log(city);
  return (
    <div >

    <div class="flex flex-col gap-2  mx-auto w-[600px] shadow-lg  ">
            <div class=" p-4 bg-gradient-to-r from-white to-sky-700 rounded-lg">

                <div className="flex flex-row gap-2 justify-around">
                    <div className="flex flex-col items-center ">
                         <h1 className="text-1xl font-normal text-left ">{city.name}</h1>
                         <h1 className="text-7xl font-normal text-left pt-10">{city.main.temp}°C</h1>
        
    </div>
                <div className="flex flex-col items-center ">
                         <img src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`}></img>
                         <h1 className="text-1xl font-normal text-left ">{city.weather[0].main}</h1>
                </div>
                </div>

            </div>
  
    </div>
        
    <div class="flex flex-col gap-2  mx-auto w-[600px] shadow-lg pt-20  ">
            <div class=" p-4 bg-gradient-to-r from-white to-sky-700 rounded-lg">

                <div className="flex flex-row gap-2 justify-around">
                    <div className="flex flex-col items-center ">
                    <img src={windgif} width="100px" height="100px"></img>
                         
                        
          
    </div>
                <div className="flex flex-col items-center ">
                <h1 className="text-1xl font-normal text-left ">Wind</h1>
                         <h1 className="text-2xl font-normal text-left pt-10">Rüzgar Hızı: {city.wind.speed}</h1>
                </div>
                </div>

            </div>
  
    </div>

    </div>
  );
};

export default City;
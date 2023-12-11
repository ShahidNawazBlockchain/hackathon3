import React, { useState, useEffect } from "react";
import axios from "axios";
function Card() {
  const API_URL = "http://localhost:4000/api/random";

  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    let intervalId;

    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setRandomNumber(response.data.random);
      } catch (error) {
        console.error("Error fetching random number:", error);
      }
    };

    const updateRandomNumber = () => {
      intervalId = setInterval(async () => {
        setRandomNumber((prevNumber) => {
          const newNumber = prevNumber - 1;
          if (newNumber <= 0) {
            clearInterval(intervalId);
            // Trigger API call to obtain a new random number
            fetchData();
          }
          return newNumber;
        });
      }, 1000);
    };

    fetchData();
    updateRandomNumber();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-screen bg-[#001974] flex items-center justify-center">
      <div className="h-64 w-64 text-white flex items-center justify-center font-bold text-8xl border-2 rounded-xl ring-1 ring-[#6373AA] bg-gradient-to-tl from-[#001974] to-[#6373AA]">
        <h1>{randomNumber !== null ? randomNumber : "..."}</h1>
      </div>
    </div>
  );
}

export default Card;

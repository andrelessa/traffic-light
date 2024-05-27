import React, { useState, useEffect } from "react";
import "./TrafficLight.css";

const TrafficLight = () => {
  const [light, setLight] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      setLight((prevLight) => {
        if (prevLight === "red") return "green";
        if (prevLight === "green") return "yellow";
        return "red";
      });
    }, 1000); // Mudança de cor a cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="traffic-light">
      <div className={`light red ${light === "red" ? "active" : ""}`}></div>
      <div
        className={`light yellow ${light === "yellow" ? "active" : ""}`}
      ></div>
      <div className={`light green ${light === "green" ? "active" : ""}`}></div>
    </div>
  );
};

export default TrafficLight;

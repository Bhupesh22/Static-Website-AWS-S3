import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ClocksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(180deg, #d2eafc 0%, #c3ddf3 100%);
`;

const Clock = styled.div`
  text-align: center;
  background-color: #2c3e50;
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  padding: 40px;
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
    padding: 30px;
  }
`;

const CityName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Time = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

function App() {
  const [bostonTime, setBostonTime] = useState("");
  const [seattleTime, setSeattleTime] = useState("");
  const [mumbaiTime, setMumbaiTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const options = {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      setBostonTime(
        new Date().toLocaleString("en-US", options)
      );

      options.timeZone = "America/Los_Angeles";
      setSeattleTime(
        new Date().toLocaleString("en-US", options)
      );

      options.timeZone = "Asia/Kolkata";
      setMumbaiTime(
        new Date().toLocaleString("en-US", options) 
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ClocksContainer>
      <Clock>
        <CityName>Boston</CityName>
        <Time>{bostonTime}</Time>
      </Clock>
      <Clock>
        <CityName>Seattle</CityName>
        <Time>{seattleTime}</Time>
      </Clock>
      <Clock>
        <CityName>Mumbai</CityName>
        <Time>{mumbaiTime}</Time>
      </Clock>
    </ClocksContainer>
  );
}

export default App;

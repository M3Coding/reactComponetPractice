import React from "react";
import { currentTime } from "./Date";

const StyledGreeting = () => {
  let greeting;
  const hour = currentTime();
  const customStyle = {
    color: "",
  };

  if (hour < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }
  return <h1 style={customStyle}>{greeting}</h1>;
};

export default StyledGreeting;

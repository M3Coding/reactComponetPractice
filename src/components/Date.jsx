import React from "react";

export const currentTime = () => {
  const date = new Date();
  const currentTime = date.getHours();
  return currentTime;
};
const CurrentDateTime = () => {
  return currentTime();
};

export default CurrentDateTime;

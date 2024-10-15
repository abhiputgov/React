import React from "react";
import reactImg from "../assets/react-core-concepts.png";

const aReactDescriptions = ["Fundamental", "Crucial", "Core"];
const fnGetRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};
const Header = () => {
  const reactDescription = aReactDescriptions[fnGetRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
};

export default Header;

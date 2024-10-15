import React from "react";

const CoreConcept = ({ image, description, title }) => {
  return (
    <li>
      <img src={image}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default CoreConcept;

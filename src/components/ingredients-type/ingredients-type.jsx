import React from "react";
import PropTypes from "prop-types";
import ingredientsStyle from "./ingredients-type.module.css";
import IngredientsItem from "../ingredients-card/ingredients-card";

const IngredientsType = ({ card, handleClick }) => {
  return (
    <ul className={`${ingredientsStyle.list} pl-4 pr-2`}>
      {card.map((item) => (
        <li key={item._id} onClick={() => handleClick(item)}>
          <IngredientsItem card={item} onClick={handleClick} />{" "}
        </li>
      ))}
    </ul>
  );
};

IngredientsType.protoType = {
  card: PropTypes.string.isRequired
};


export default IngredientsType;
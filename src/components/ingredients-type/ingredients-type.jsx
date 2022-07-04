import React from "react";
import PropTypes from "prop-types";
import { data } from "../../utils/data";
import { ingredientType } from "../../utils/types";
import ingredientsStyle from "./ingredients-type.module.css";
import { IngredientsItem } from "../ingredients-card/ingredients-card";

export const IngredientsType = ({ itemList, handleClick }) => {
  return (
    <ul className={`${ingredientsStyle.list} pl-4 pr-2`}>
      {itemList.map((item) => (
        <li key={item._id} onClick={() => handleClick(item)}>
          <IngredientsItem card={item} onClick={handleClick} />{" "}
        </li>
      ))}
    </ul>
  );
};

IngredientsType.protoType = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

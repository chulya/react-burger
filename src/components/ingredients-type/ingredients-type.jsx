import React from "react";
import PropTypes from "prop-types";
import { data } from "../../utils/data";
import { ingredientType } from "../../utils/types";
import ingredientsStyle from "./ingredients-type.module.css";
import { IngredientsItem } from "../ingredients-card/ingredients-card";

export const IngredientsType = (props) => {
  const card = data.filter((item) => item.type === props.type);

  return (
    <article className={`${ingredientsStyle.item} `} id={props.type}>
      <h2
        className={`${ingredientsStyle.text} text text_type_main-medium pb-6 pt-2`}
      >
        {props.text}
      </h2>
      <ul className={ingredientsStyle.list}>
        {card.map((item) => (
          <li key={item._id}>
            <IngredientsItem
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </li>
        ))}
      </ul>
    </article>
  );
};

IngredientsType.protoType = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

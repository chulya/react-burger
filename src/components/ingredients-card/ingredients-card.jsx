import React from "react";
import PropTypes from "prop-types";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientType } from "../../utils/types";
import ingredientsItemStyle from "./ingredients-card.module.css";

export const IngredientsItem = (props) => {
  return (
    <section className={`${ingredientsItemStyle.item} pl-4`}>
      <Counter count={1} size="default" />
      <img
        className={`${ingredientsItemStyle.image}`}
        src={props.image}
        alt={props.name}
      />
      <div className={`${ingredientsItemStyle.price} pt-1 pb-2`}>
        <p className="text text_type_digits-default pr-2">{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default pb-10">{props.name}</p>
    </section>
  );
};

IngredientsItem.protoType = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

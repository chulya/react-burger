import React from "react";
import PropTypes from "prop-types";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientsItemStyle from "./ingredients-card.module.css";

const IngredientsItem = ({ card }) => {
  const [count, setCount] = React.useState(0);
  return (
    <article className={ingredientsItemStyle.item}>
      {count !== 0 && <Counter count={count} size="default" />}
      <img src={`${card.image}`} alt={card.name} className="pl-4 pr-4" />
      <p
        className={`${ingredientsItemStyle.price} text text_type_digits-default pt-1 pb-1`}
      >
        {card.price}
        <CurrencyIcon type="primary" />
      </p>
      <p className={`${ingredientsItemStyle.name} text text_type_main-default`}>
        {card.name}
      </p>
    </article>
  );
};

IngredientsItem.protoType = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default IngredientsItem;

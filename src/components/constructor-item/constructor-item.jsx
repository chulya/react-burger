import React from "react";
import PropTypes from "prop-types";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientType } from "../../utils/types";
import constructorItemStyle from "./constructor-item.module.css";

const ConstructorItem = (props) => {
  return (
    <article className={`${constructorItemStyle.item} pt-4 pr-3`}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={props.items.name}
        price={props.items.price}
        thumbnail={props.items.image}
      />
    </article>
  );
};

ConstructorItem.protoType = {
  items: ingredientType.isRequired,
};


export default ConstructorItem;
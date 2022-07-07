import React from "react";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItem from "../constructor-item/constructor-item";
import burgerConstructorStyle from "./burger-constructor.module.css";
import { data } from "../../utils/data";

const BurgerConstructor = ({ onButtonOrderClick }) => {
  const bun = data.find(item => item.type === 'bun')
  return (
    <section className={`${burgerConstructorStyle.constructor} pl-10 pt-25`}>
      <article className={`${burgerConstructorStyle.items_block} pr-2`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${bun.name} (верх)`}
          price={bun.price}
          thumbnail={bun.image_mobile}
        />

        <ul className={`${burgerConstructorStyle.list} pr-2`}>
          {data.map((item,index) => {
            if (item.type !== "bun") {
              return <ConstructorItem key={index} items={item} />;
            }
          })}
        </ul>

        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${bun.name} (низ)`}
          price={bun.price}
          thumbnail={bun.image_mobile}
        />
      </article>

      <article className={`${burgerConstructorStyle.order} pt-10 pr-5`}>
        <div className={`${burgerConstructorStyle.bill} pr-10`}>
          <h2 className="text text_type_digits-medium pr-2">610</h2>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          type="primary"
          size="large"
          onClick={() => onButtonOrderClick()}
        >
          Оформить заказ
        </Button>
      </article>
    </section>
  );
};

BurgerConstructor.propTypes = {
  onButtonOrderClick: PropTypes.func.isRequired
}

export default BurgerConstructor;

import React from "react";

import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorItem } from "../constructor-item/constructor-item";
import burgerConstructorStyle from "./burger-constructor.module.css";
import { data } from "../../utils/data";

export const BurgerConstructor = ({ ingredients, onButtonOrderClick }) => {
  const ingredientsArray = ingredients.filter(
    (element) => element.type !== "bun"
  );

  return (
    <section className={`${burgerConstructorStyle.constructor} pl-10 pt-25`}>
      <article className={`${burgerConstructorStyle.items_block} pr-2`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={"Краторная булка N-200i (верх)"}
          price={20}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
        />

        <ul className={`${burgerConstructorStyle.list} pr-2`}>
          {data.map((item) => {
            if (item.type !== "bun") {
              return <ConstructorItem key={item._id} items={item} />;
            }
          })}
        </ul>

        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={"Краторная булка N-200i (низ)"}
          price={20}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
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

import React from "react";
import burgerStyle from "./burger-ingredients.module.css";
import { IngredientsType } from "../ingredients-type/ingredients-type";
import { burgerComposition } from "../../utils/burger-сomposition";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

export const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState("one");
  return (
    <section className={burgerStyle.section}>
      <h1 className={`${burgerStyle.title} text text_type_main-large`}>
        Соберите бургер
      </h1>
      <div className={burgerStyle.navigation}>
        <a className={burgerStyle.link} href="#">
          <Tab value="one" active={current === "one"} onClick={setCurrent}>
            Булки
          </Tab>
        </a>
        <a className={burgerStyle.link} href="#">
          <Tab value="two" active={current === "two"} onClick={setCurrent}>
            Соусы
          </Tab>
        </a>
        <a className={burgerStyle.link} href="#">
          <Tab value="three" active={current === "three"} onClick={setCurrent}>
            Начинки
          </Tab>
        </a>
      </div>
      <ul className={`${burgerStyle.list} pt-8`}>
        {burgerComposition.map((item) => (
          <IngredientsType key={item.type} type={item.type} text={item.text} />
        ))}
      </ul>
    </section>
  );
};

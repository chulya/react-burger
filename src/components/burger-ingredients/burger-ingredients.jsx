import React from "react";
import PropTypes from "prop-types";
import burgerStyle from "./burger-ingredients.module.css";
import { IngredientsType } from "../ingredients-type/ingredients-type";
import { burgerComposition } from "../../utils/burger-сomposition";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientType } from "../../utils/types";

export const BurgerIngredients = ({ ingredients, onIngredientClick }) => {
  const bunsArray = ingredients.filter((element) => element.type === "bun");
  const sauceArray = ingredients.filter((element) => element.type === "sauce");
  const mainArray = ingredients.filter((element) => element.type === "main");

  const [current, setCurrent] = React.useState("bun");
  const handleClick = (activeTab) => {
    setCurrent(activeTab);
    let anchorElement = document.getElementById(activeTab);
    anchorElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className={burgerStyle.section}>
      <h1 className={`${burgerStyle.title} text text_type_main-large`}>
        Соберите бургер
      </h1>
      <div className={burgerStyle.navigation}>
        <a className={burgerStyle.link} href="#">
          <Tab
            value="bun"
            active={current === "bun"}
            onClick={() => {
              handleClick("bun");
            }}
          >
            Булки
          </Tab>
        </a>
        <a className={burgerStyle.link} href="#">
          <Tab
            value="sauce"
            active={current === "sauce"}
            onClick={() => {
              handleClick("sauce");
            }}
          >
            Соусы
          </Tab>
        </a>
        <a className={burgerStyle.link} href="#">
          <Tab
            value="main"
            active={current === "main"}
            onClick={() => {
              handleClick("main");
            }}
          >
            Начинки
          </Tab>
        </a>
      </div>
      <ul className={`${burgerStyle.list} pt-8`}>
        <h2
          id="bun"
          className={`${burgerStyle.text} text text_type_main-medium pt-10 pb-6`}
        >
          Булки
        </h2>
        <IngredientsType itemList={bunsArray} handleClick={onIngredientClick} />
        <h2
          id="sauce"
          className={`${burgerStyle.text} text text_type_main-medium pt-10 pb-6`}
        >
          Соусы
        </h2>
        <IngredientsType
          itemList={sauceArray}
          handleClick={onIngredientClick}
        />
        <h2
          id="main"
          className={`${burgerStyle.text} text text_type_main-medium pt-10 pb-6`}
        >
          Начинки
        </h2>
        <IngredientsType itemList={mainArray} handleClick={onIngredientClick} />
      </ul>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType.isRequired).isRequired,
  onIngredientClick: PropTypes.func.isRequired,
};

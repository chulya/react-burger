import React from "react";
import PropTypes from "prop-types";
import burgerStyle from "./burger-ingredients.module.css";
import IngredientsType from "../ingredients-type/ingredients-type";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredients = ({ ingredients, onIngredientClick }) => {
  const [current, setCurrent] = React.useState("bun");
  const bunGroup = ingredients.filter((item) => item.type === "bun");
  const sauceGroup = ingredients.filter((item) => item.type === "sauce");
  const mainGroup = ingredients.filter((item) => item.type === "main");

  return (
    <section className={burgerStyle.section}>
      <h1 className={`${burgerStyle.title} text text_type_main-large`}>
        Соберите бургер
      </h1>

      <div className={burgerStyle.navigation}>
        <a className={burgerStyle.link} href="#">
          <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
            Булки
          </Tab>
        </a>
        <a className={burgerStyle.link} href="#">
          <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
            Соусы
          </Tab>
        </a>
        <a className={burgerStyle.link} href="#">
          <Tab value="main" active={current === "main"} onClick={setCurrent}>
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
        <IngredientsType card={bunGroup} handleClick={onIngredientClick} />
        <h2
          id="sauce"
          className={`${burgerStyle.text} text text_type_main-medium pt-10 pb-6`}
        >
          Соусы
        </h2>
        <IngredientsType card={sauceGroup} handleClick={onIngredientClick} />
        <h2
          id="main"
          className={`${burgerStyle.text} text text_type_main-medium pt-10 pb-6`}
        >
          Начинки
        </h2>
        <IngredientsType card={mainGroup} handleClick={onIngredientClick} />
      </ul>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.array.isRequired,
  onIngredientClick: PropTypes.func.isRequired,
};

export default BurgerIngredients;

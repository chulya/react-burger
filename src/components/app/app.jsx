import React from "react";
import { useState, useEffect } from "react";
import appStyle from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import { API } from "../../utils/const";

const App = () => {
  const [isIngredientOpened, setIngredientOpened] = useState(false);
  const [isOrderOpened, setOrderOpened] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [ingredientSelected, setIngredientSelected] = useState({});

  const getIngredients = () => {
    fetch(API)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        setIngredients(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getIngredients(ingredients, setIngredients);
  }, []);

  const closeModal = () => {
    setOrderOpened(false);
    setIngredientOpened(false);
  };

  const handleEscClose = (evt) => {
    evt.key === "Escape" && closeModal();
  };

  const openModalIngredient = (ingredient) => {
    setIngredientSelected(ingredient);
    setIngredientOpened(true);
  };

  const openModalOrder = () => {
    setOrderOpened(true);
  };

  return (
    <div className={`${appStyle.app} pt-10 pb-10`}>
      <AppHeader />
      <main className={appStyle.content}>
        <BurgerIngredients
          ingredients={ingredients}
          onIngredientClick={openModalIngredient}
        />
        <BurgerConstructor
          ingredients={ingredients}
          onButtonOrderClick={openModalOrder}
        />
      </main>
      {isIngredientOpened && (
        <Modal closePopup={closeModal} onCloseEsc={handleEscClose}>
          <IngredientDetails ingredient={ingredientSelected} />
        </Modal>
      )}
      {isOrderOpened && (
        <Modal closePopup={closeModal} onCloseEsc={handleEscClose}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};

export default App;

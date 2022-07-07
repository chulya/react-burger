import React from "react";
import detailsStyles from "./order-details.module.css";

const OrderDetails = () => {
  return (
    <div className={detailsStyles.container}>
      <h2
        className={`${detailsStyles.title} text text_type_digits-large pt-30`}
      >
        034536
      </h2>
      <p className={`${detailsStyles.text} text text_type_main-medium`}>идентификатор заказа</p>
      <div className={`${detailsStyles.image} pt-15 pb-15`} />
      <p className={`${detailsStyles.text} text text_type_main-default`}>Ваш заказ начали готовить</p>
      <p className={`${detailsStyles.text} text text_type_main-default text_color_inactive mt-2 mb-30`}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};


export default OrderDetails;
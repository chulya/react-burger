import detailsStyles from "./order-details.module.css";

export const OrderDetails = () => {
  return (
    <div className={detailsStyles.container}>
      <h2
        className={`${detailsStyles.title} text text_type_digits-large pt-30`}
      >
        034536
      </h2>
      <p className={"text text_type_main-medium pt-8"}>идентификатор заказа</p>
      <div className={`${detailsStyles.image} pt-15 pb-15`} />
      <p className={"text text_type_main-default"}>Ваш заказ начали готовить</p>
      <p className={"text text_type_main-default text_color_inactive pt-2"}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

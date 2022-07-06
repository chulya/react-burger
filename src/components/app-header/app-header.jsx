import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyle from "./app-header.module.css";

const AppHeader = () => {
  return (
    <header className={`${headerStyle.header} pt-2 pb-4`}>
      <nav className={headerStyle.menu}>
        <ul className={headerStyle.menuList}>
          <li className={`${headerStyle.menuItem} pr-5 pl-5 mr-2`}>
            <a
              className={`${headerStyle.menuLink} text text_type_main-default`}
              href="#"
            >
              <BurgerIcon type="primary" />
              <p className="ml-2">Конструктор</p>
            </a>
          </li>
          <li className={`${headerStyle.menuItem} pr-5 pl-5`}>
            <a
              className={`${headerStyle.menuLink} text text_type_main-default text_color_inactive`}
              href="#"
            >
              <ListIcon type="secondary" />
              <p className="ml-2">Лента заказов</p>
            </a>
          </li>
          <li className={`${headerStyle.menuItem} ${headerStyle.logo}`}>
            <Logo />
          </li>
          <li className={`${headerStyle.menuItem} pr-5 pl-5`}>
            <a
              className={`${headerStyle.menuLink} text text_type_main-default text_color_inactive`}
              href="#"
            >
              <ProfileIcon type="secondary" />
              <p className="ml-2">Личный кабинет</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;

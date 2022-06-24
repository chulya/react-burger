import appStyle from './app.module.css';
import { AppHeader } from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';

export const App = () => {
  return (
    <section className = {appStyle.app}>
      <AppHeader />
      <main className = {appStyle.content}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </section>
  );
}

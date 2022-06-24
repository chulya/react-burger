import React from 'react';
import burgerStyle from './burger-ingredients.module.css'
import { IngredientsType } from '../ingredients-type/ingredients-type'
import { burgerComposition } from '../../utils/burger-сomposition'

export const BurgerIngredients = () => {
	return (
		<section className ={burgerStyle.section}>
			<h1 className={`${burgerStyle.title} text text_type_main-large`}>Соберите бургер</h1>
			<ul className = {`${burgerStyle.list} pt-8`}>
				{burgerComposition.map((item) => (
					<IngredientsType 
            key={item.type} 
            type={item.type} 
            text={item.text} />
				))}
			</ul>
	</section>
	)
}
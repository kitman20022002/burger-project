import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    let transformedImgredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey}/>
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);
    if (transformedImgredients.length === 0) {
        transformedImgredients = <p>Please start adding ingredients</p>
    }
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {transformedImgredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;
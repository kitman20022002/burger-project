import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from "../../components/Burger/Burger";
import BuildControllers from "../../components/Burger/BuildControls/BuildControllers";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 10,
};

class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {...};
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 2,
            meat: 0,
        },
        totalPrice: 4
    };
    addIntredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCounted = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updateCounted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrie = this.state.totalPrice;
        const newPrice = oldPrie + priceAddition;
        this.setState({totalPrice:newPrice , ingredients:updatedIngredients});
    };

    removeIngredientHandler = (type) => {

    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControllers
                    ingredientAdded={this.addIntredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;
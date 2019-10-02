import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
    const ingredientSummay = Object.keys(props.ingredients).map(igKey => {
        return (<li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}</li>);
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A declicous burger with following things:</p>
            <ul>
                {ingredientSummay}
            </ul>
            <p>Continue to Order</p>
        </Aux>
    );
};

export default orderSummary;
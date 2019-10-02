import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        const ingredientSummay = Object.keys(this.props.ingredients).map(igKey => {
            return (
                <li key={igKey}><span
                    style={{textTransform: 'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}
                </li>);
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A declicous burger with following things:</p>
                <ul>
                    {ingredientSummay}
                </ul>
                <p><strong>Total Price:{this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Order</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;
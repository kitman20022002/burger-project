import React from 'react';
import './BuildControllers.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'salad'},
];
const buildControls = (props) => (
    <div className="BuildControls">
        {controls.map(ctrl => (<BuildControl key={ctrl.label} label={ctrl.label}/>))}
    </div>
);

export default buildControls;
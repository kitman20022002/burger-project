import React from 'react';
import NavigationItems from "../NavigationItems/NavigationItems";
import './SideDrawer.css';
import Modal from "../../UI/Modal/Modal";
import Aux from '../../../hoc/Auxiliary'
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
    //...

    let attachedClass = ['SideDrawer', 'Close'];
    if (props.open) {
        attachedClass = ['SideDrawer', 'Open'];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClass.join(' ')}>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;
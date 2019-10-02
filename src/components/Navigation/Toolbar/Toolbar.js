import React from 'react';
import './Toolbar.css';
import NavigationItems from "../NavigationItems/NavigationItems";
const toolbar = (props) => (
    <header className="Toolbar">
        <div>MENU</div>
        <div>LOGO</div>
        <NavigationItems/>
    </header>
);

export default toolbar;
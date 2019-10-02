import React from 'react';
import './Toolbar.css';
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div>LOGO</div>
        <NavigationItems/>
    </header>
);

export default toolbar;
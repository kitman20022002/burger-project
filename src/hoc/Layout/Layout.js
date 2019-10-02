import React from 'react';
import Aux from '../Auxiliary/Auxiliary';
import './Layout.css';
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";


class Layout extends React.Component {
    state = {
        showSideDrawer: true
    };


    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    showSideDrawer = () => {
        this.setState({showSideDrawer: true});
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    };

    render() {
        return (<Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer open={this.state.showSideDrawer}
                        closed={this.sideDrawerClosedHandler}/>
            <main className="Content">
                {this.props.children}
            </main>
        </Aux>);
    }
}

export default Layout;
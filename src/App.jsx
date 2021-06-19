import React from 'react';
import Navigation from './components/Navigation/Navigation';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Login from './components/Login/Login';

import Settings from './components/Settings/Settings';

import {BrowserRouter, Route, withRouter} from "react-router-dom";

import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./redux/app-reducer";
import Loader from "./components/common/Loader/Loader";


class App extends React.Component {

    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Loader/>
        }

        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>


        );
    }
}

             const mapStateToProps = (state)=> ({
                 initialized: state.app.initialized
             })
             export default compose(
             withRouter,
             connect(mapStateToProps, {initializedApp})) (App)



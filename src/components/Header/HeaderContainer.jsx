import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from "react-redux";
import { setUserData, setUserPhoto, getUserData } from "./../../redux/auth-reducer";
import {usersAPI, authAPI }  from '../api/api.js'

class HeaderContainer extends React.Component {

   componentDidMount () {
      debugger;
         this.props.getUserData()
   }

   render () {
      return (
      <Header  {...this.props}/>

   )
   }
   
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
   photo: state.auth.photo,

});

export default connect(mapStateToProps, {getUserData}) (HeaderContainer);
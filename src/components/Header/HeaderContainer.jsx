import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from "react-redux";
import { setUserData, setUserPhoto } from "./../../redux/auth-reducer";
import {getAuthInfo, getUsersPhoto}  from '../api/api.js'

class HeaderContainer extends React.Component {

   componentDidMount () {
         getAuthInfo()
         .then(response => {
               if(response.resultCode === 0) {
                  let {id, login,email} = response.data;
                  this.props.setUserData(id, login, email);
                    getUsersPhoto(2)
                     .then( response => {
                        debugger;
                        let photo =  response.photos.small;
                        this.props.setUserPhoto(photo);
                     })
               }

         })
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

export default connect(mapStateToProps, {
setUserData,
setUserPhoto
}) (HeaderContainer);
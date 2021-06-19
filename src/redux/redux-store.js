import profilePageReducer from "./profile-reducer";
import dialogsPageReducer from "./dialogs-reducer";
import sideBarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk';
import {
  reducer as formReduer
} from 'redux-form';
import appReducer from "./app-reducer";




let redusers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReduer,
  app:  appReducer
})


let store = createStore(redusers, applyMiddleware(thunk));

window.store = store;

export default store;
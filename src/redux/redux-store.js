import {
  createStore,
  combineReducers
} from 'redux';
import profilePageReducer from "./profile-reducer";
import dialogsPageReducer from "./dialogs-reducer";
import sideBarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";




let redusers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
  auth: authReducer
})

let store = createStore(redusers);

window.store = store;

export default store;
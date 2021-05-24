import {createStore, combineReducers} from 'redux';
import profilePageReducer from "./profile-reducer";
import dialogsPageReducer from "./dialogs-reducer";
import sideBarReducer from "./sidebar-reducer";


let redusers = combineReducers({
   profilePage: profilePageReducer,
   dialogsPage: dialogsPageReducer,
   sideBar:  sideBarReducer
 })

let store = createStore(redusers);

export default store;
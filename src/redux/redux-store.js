import profilePageReducer from "./profile-reducer";
import dialogsPageReducer from "./dialogs-reducer";
import sideBarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import {
  createStore,
  combineReducers,
  applyMiddleware, compose
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


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));


export default store;
import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import { reducer as formReducer } from 'redux-form';
import ThunkMiddleware from "redux-thunk";
import {appReducer} from "./app-reducer";



export type AppStateType = ReturnType<typeof reducers>
const reducers = combineReducers({
    appReducer,
    profileReducer,
    dialogsReducer,
    usersReducer,
    auth:authReducer,
    form:formReducer
})
export type RootType=typeof store
const store = createStore(reducers,applyMiddleware(ThunkMiddleware));
//@ts-ignore
window.store=store
export default store
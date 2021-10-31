import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

export type AppStateType = ReturnType<typeof reducers>
const reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
    auth:authReducer,
})
export type RootType=typeof store
const store = createStore(reducers);
//@ts-ignore
window.store=store
export default store
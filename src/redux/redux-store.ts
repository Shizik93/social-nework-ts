import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
export type reducersType=ReturnType<typeof reducers>
let reducers = combineReducers({
    profileReducer,
    dialogsReducer
})

let store = createStore(reducers);

export default store
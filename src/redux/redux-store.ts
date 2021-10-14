import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

export type AppStateType = ReturnType<typeof reducers>
const reducers = combineReducers({
    profileReducer,
    dialogsReducer
})
export type RootType=typeof store
const store = createStore(reducers);
/*export const dispatch = (action: profileReducerType | dialogsReducerType) => {
    store.dispatch(action)

}*/
export default store
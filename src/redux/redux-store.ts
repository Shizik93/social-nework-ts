import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";

export type AppStateType = ReturnType<typeof reducers>
const reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer
})
export type RootType=typeof store
const store = createStore(reducers);
/*export const dispatch = (action: profileReducerType | dialogsReducerType) => {
    store.dispatch(action)

}*/
export default store
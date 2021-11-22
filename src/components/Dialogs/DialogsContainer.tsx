import React, {ComponentType} from "react";
import {dialogsReducerType, SendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state: AppStateType) => {
    return {
        state: state.dialogsReducer,
       
    }
}
let mapDispatchToProps = (dispatch: (action: dialogsReducerType) => void) => {
    return {
        AddNewMessage: (value:any) => {

            dispatch(SendMessageAC(value))
        },

    }
}
export const DialogsContainer=compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs)







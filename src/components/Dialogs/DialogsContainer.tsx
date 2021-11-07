import React, {ChangeEvent} from "react";
import {ChangeNewMessageAC, dialogsReducerType, SendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        state: state.dialogsReducer,
        isAuth:state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: (action: dialogsReducerType) => void) => {
    return {
        AddNewMessage: () => {
            dispatch(SendMessageAC())
        },
        ChangeNewMessage: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(ChangeNewMessageAC(e.currentTarget.value))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)






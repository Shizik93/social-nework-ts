import React, {ChangeEvent} from "react";
import {ChangeNewMessageAC, SendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        state: state.dialogsReducer.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: (action: any) => void) => {
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






import m from "../Dialogs.module.css";
import React from "react";

export type TypeMessage = {
    message: string
}


function Message(props: TypeMessage) {
    return (
        <div className={m.message}>{props.message}</div>
    )

}
export default Message
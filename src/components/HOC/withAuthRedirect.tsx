import React, {ComponentType} from "react";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

type MapStatePropsType = {
    isAuth: boolean
}
const mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsType => ({

    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: MapStatePropsType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={'login'}/>
        return <div></div> /*<Component{...restProps as T}/>*/
    }


    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}
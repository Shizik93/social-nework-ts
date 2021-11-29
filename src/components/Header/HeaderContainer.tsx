import React from "react";
import {Header} from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setAuthUserData, logout} from "../../redux/auth-reducer";
type AuthType={
    userId:number|null,
    email:string|null,
    login:string|null,
    isAuth:boolean
}
type HeaderContainerPropsType={
    setAuthUserData:(userId:number|null,email:string|null,login: string|null,isAuth: boolean)=>void,
    auth:AuthType
    logout:()=>void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {


    render() {
        return (
            <Header{...this.props} />
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
auth:state.auth
})
export default connect(mapStateToProps, {setAuthUserData,logout})(HeaderContainer)
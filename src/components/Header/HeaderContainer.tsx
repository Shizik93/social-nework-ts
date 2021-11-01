import React from "react";
import {Header} from "./Header";

import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

type AuthType={
    userId:number|null,
    email:string|null,
    login:string|null,
    isAuth:boolean
}
type HeaderContainerPropsType={
    setAuthUserData:(userId:number,email:string,login: string)=>void,
    auth:AuthType
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        authAPI.login()
            .then(data => {
                if (data.resultCode === 0) {
                    let{id,login,email}=data.data
                    this.props.setAuthUserData(id,login,email)
                }
            })
    }

    render() {
        return (
            <Header{...this.props} />
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
auth:state.auth
})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
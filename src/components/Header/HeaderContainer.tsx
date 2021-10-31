import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
type AuthType={
    userId:number|null,
    email:string|null,
    login:string|null,
    isAuth:boolean
}
type AuthResponceType = {
    data: {
        id: number,
        login: string,
        email: string},
    messages: [],
    fieldsErrors: [],
    resultCode: number }
type HeaderContainerPropsType={
    setAuthUserData:(userId:number,email:string,login: string)=>void,
    auth:AuthType
}
class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get<AuthResponceType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    let{id,login,email}=responce.data.data
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
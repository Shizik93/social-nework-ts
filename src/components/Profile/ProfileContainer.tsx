import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {
    getUserProfile,
    getUserProfileStatusThunk,
    setUserProfile,
    setUserProfileStatusThunk
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router-dom";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";



type ProfileUsersType = {

    aboutMe: string,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    userId: number,
    photos: {
        small: string | null,
        large: string | null
    }
}
type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    setUserProfile: (profile: ProfileUsersType) => void
    getUserProfileStatusThunk:(userId:number)=>void
    setUserProfileStatusThunk:(status:string)=>void

}
type mapStateToPropsType = {
    userId:number
    status:string
    profile: ProfileUsersType | null,
    isAuth: boolean
}
type pathParamsType = {
    userId: string

}
type ProfileContainerPropsType = RouteComponentProps<pathParamsType> & mapDispatchToPropsType & mapStateToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        if(this.props.match.params.userId){
            this.props.getUserProfile(this.props.match.params.userId)
            this.props.getUserProfileStatusThunk(+this.props.match.params.userId)
        }
        else {this.props.getUserProfileStatusThunk(this.props.userId)}

    }

    render() {

        return <Profile{...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.setUserProfileStatusThunk}/>
    }
}



const mapStateToProps = (state: AppStateType) => ({
    userId:state.auth.userId,
    profile: state.profileReducer.profile,
    status:state.profileReducer.status,
    isAuth:state.auth.isAuth

})


export default compose<ComponentType>(connect(mapStateToProps, {
    setUserProfile,
    getUserProfile,
    getUserProfileStatusThunk,
    setUserProfileStatusThunk}),withRouter,withAuthRedirect)(ProfileContainer)


import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, setUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
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
}
type mapStateToPropsType = {
    profile: ProfileUsersType | null,
    isAuth: boolean
}
type pathParamsType = {
    userId: string

}
type ProfileContainerPropsType = RouteComponentProps<pathParamsType> & mapDispatchToPropsType & mapStateToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)

    }

    render() {

        return <Profile{...this.props} profile={this.props.profile}/>
    }
}



const mapStateToProps = (state: AppStateType) => ({
    profile: state.profileReducer.profile,

})


export default compose<ComponentType>(connect(mapStateToProps, {setUserProfile, getUserProfile}),withRouter,withAuthRedirect)(ProfileContainer)
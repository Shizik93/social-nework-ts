import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";

import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router-dom";
import {profileAPI} from "../../api/api";


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
    setUserProfile: (profile: ProfileUsersType) => void
}
type mapStateToPropsType = { profile: ProfileUsersType | null }
type pathParamsType = {
    userId: string

}
type ProfileContainerPropsType = RouteComponentProps<pathParamsType> & mapDispatchToPropsType & mapStateToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {

        profileAPI.getUserProfile(this.props.match.params.userId).then(data => {
            this.props.setUserProfile(data)
        })
    }

    render() {
        return <Profile{...this.props} profile={this.props.profile}/>
    }
}


const mapStateToProps = (state: AppStateType) => ({
    profile: state.profileReducer.profile

})

const withRouterProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(withRouterProfileContainer)
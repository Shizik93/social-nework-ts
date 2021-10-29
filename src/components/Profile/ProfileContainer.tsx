import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import axios from "axios";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router-dom";

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

        axios.get<ProfileUsersType>('https://social-network.samuraijs.com/api/1.0/profile/'+this.props.match.params.userId).then(responce => {
            this.props.setUserProfile(responce.data)

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
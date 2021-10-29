import React from "react";
import { connect } from "react-redux";
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import axios from "axios";
type ProfileUsersType={

    aboutMe:string,
    contacts: {
        facebook: string|null,
        website: string|null,
        vk: string|null,
        twitter: string|null,
        instagram: string|null,
        youtube: string|null,
        github: string|null,
        mainLink: string|null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string|null,
    fullName: string,
    userId: number,
    photos: {
        small: string|null,
        large: string|null
    }
}
type ProfileContainerPropsType={
    profile:ProfileUsersType|null
    setUserProfile:(profile:ProfileUsersType)=>void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType>{
    componentDidMount() {
        axios.get<ProfileUsersType>('https://social-network.samuraijs.com/api/1.0/profile/2').then(responce => {
            this.props.setUserProfile(responce.data)

        })
    }

    render() {
        return <Profile profile={this.props.profile} setUserProfile={this.props.setUserProfile}/>
    }
}

const mapStateToProps=(state:AppStateType)=>({
    profile:state.profileReducer.profile

})

export default connect(mapStateToProps,{setUserProfile})(ProfileContainer)
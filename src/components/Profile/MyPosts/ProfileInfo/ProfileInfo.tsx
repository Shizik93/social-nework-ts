import React from "react";
import m from './ProfileInfo.module.css'

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
type ProfileInfoPropsType = {
    profile: ProfileUsersType | null
}

function ProfileInfo(props:ProfileInfoPropsType) {

    return (


        <div>
            <div>
                <img className={m.img}
                     src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'/>
            </div>
            <div className={m.descriptionBlock}>
                {props.profile?.photos.large&&<img src={props.profile.photos.large}/>}
                <h1>{props.profile?.fullName}</h1>
                <h2>{props.profile?.aboutMe}</h2>


                Ava+description
            </div>


        </div>
    )
}

export default ProfileInfo
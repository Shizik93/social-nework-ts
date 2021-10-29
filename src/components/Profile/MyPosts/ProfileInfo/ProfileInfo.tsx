import React from "react";
import {NavLink} from "react-router-dom";
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

function ProfileInfo(props: ProfileInfoPropsType) {


    return (


        <div>
            <div>
                <img className={m.img}
                     src='https://worksolutions.ru/storage/UxBYDUfBNl9RfD5r6wMDvAWke3mGTfZaDcmHGZWc.png'/>
            </div>
            <div className={m.descriptionBlock}>
                {props.profile?.photos.large && <img src={props.profile.photos.large}/>}
                <h1>{props.profile?.fullName}</h1>
                <h2>{props.profile?.aboutMe}</h2>
                {props.profile?.contacts.vk && <li>{props.profile?.contacts.vk}</li> }
                {props.profile?.contacts.twitter && <li>{props.profile?.contacts.twitter}</li> }
                {props.profile?.contacts.instagram && <li>{props.profile?.contacts.instagram}</li> }
                {props.profile?.contacts.github && <li>{props.profile?.contacts.github}</li> }
                {props.profile?.contacts.website && <li>{props.profile?.contacts.website}</li> }
                {props.profile?.contacts.facebook && <li>{props.profile?.contacts.facebook}</li> }
                {props.profile?.contacts.mainLink && <li>{props.profile?.contacts.mainLink}</li> }
                {props.profile?.contacts.youtube && <li>{props.profile?.contacts.youtube}</li> }

            </div>


        </div>
    )
}

export default ProfileInfo
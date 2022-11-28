import m from './ProfileInfo.module.css'
import { ProfileStatus } from "./ProfileStatus";
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks/hooks";
import {setUserProfileStatusTC} from "../../../../redux/profile-reducer";


const ProfileInfo=()=> {

    const dispatch=useAppDispatch()
    const profile=useAppSelector(state=>state.profileReducer.profile)
    const status=useAppSelector(state=>state.profileReducer.status)
    const updateStatus=(status:string)=>{
        dispatch(setUserProfileStatusTC(status))
    }

    return (


        <div>

            <div>
                <img className={m.img}
                     src='https://worksolutions.ru/storage/UxBYDUfBNl9RfD5r6wMDvAWke3mGTfZaDcmHGZWc.png'/>
            </div>
            <h3><ProfileStatus status={status} updateStatus={updateStatus}/></h3>
            <div className={m.descriptionBlock}>
                {profile?.photos.large && <img src={profile.photos.large}/>}
                <h1>{profile?.fullName}</h1>
                <h2>{profile?.aboutMe}</h2>
                {profile?.contacts.vk && <li>{profile?.contacts.vk}</li>}
                {profile?.contacts.twitter && <li>{profile?.contacts.twitter}</li>}
                {profile?.contacts.instagram && <li>{profile?.contacts.instagram}</li>}
                {profile?.contacts.github && <li>{profile?.contacts.github}</li>}
                {profile?.contacts.website && <li>{profile?.contacts.website}</li>}
                {profile?.contacts.facebook && <li>{profile?.contacts.facebook}</li>}
                {profile?.contacts.mainLink && <li>{profile?.contacts.mainLink}</li>}
                {profile?.contacts.youtube && <li>{profile?.contacts.youtube}</li>}

            </div>


        </div>
    )
}

export default ProfileInfo
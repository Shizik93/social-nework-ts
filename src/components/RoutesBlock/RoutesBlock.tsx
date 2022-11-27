import {Route, Routes} from "react-router-dom";
import {UsersContainer} from "../Users/UsersContainer";
import {DialogsContainer} from "../Dialogs/DialogsContainer";
import {Profile} from "../Profile/Profile";
import Music from "../Music/Music";
import News from "../News/News";
import Settings from "../Settings/Settings";
import Login from "../Login/Login";
import React from "react";

export const RoutesBlock=()=>{
    return(
        <div className='app-wrapper-content'>
            <Routes>
                <Route path='/users' element={<UsersContainer/>}/>
                <Route path='/dialogs' element={<DialogsContainer/>}/>
                <Route path="/profile/:userId" element={<Profile/>}/>
                <Route path='/music' element={<Music/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/settings' element={<Settings/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>



        </div>
    )
}
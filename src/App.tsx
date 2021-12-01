import React, {useEffect} from "react";
import './App.css';
import {Nav} from "./components/Navbar/Nav";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

import {useDispatch, useSelector} from "react-redux";
import {setLogin} from "./redux/auth-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/preloader/preloader";
import { initializingApp } from "./redux/app-reducer";


function App() {
    const state = useSelector((state: AppStateType) => state)
    const dispatch = useDispatch()
    const initialized = state.appReducer.initialized
    useEffect(() => {
        dispatch(setLogin())

    }, [])
    useEffect(()=>{
        dispatch(initializingApp())
    },[])

    return (
        <>{initialized?
            <div className='app-wrapper'>
          <HeaderContainer/>
          <Nav/>
          <div className='app-wrapper-content'>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
            <Route path='/login' render={() => <Login/>}/>


          </div>
        </div>
            :<Preloader/>}

        </>


    );
}

export default App;



import React, {useEffect} from "react";
import './App.css';
import {Nav} from "./components/Navbar/Nav";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

import {setLogin} from "./redux/auth-reducer";
import {Preloader} from "./components/common/preloader/preloader";
import { initializingApp } from "./redux/app-reducer";
import {useAppDispatch, useAppSelector} from "./redux/hooks/hooks";


function App() {
    const initialized = useAppSelector(state=>state.appReducer.initialized)
    const dispatch = useAppDispatch()
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
              <Routes>
                  <Route path='/users' element={<UsersContainer/>}/>
                  <Route path='/dialogs' element={<DialogsContainer/>}/>
                  <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                  <Route path='/music' element={<Music/>}/>
                  <Route path='/news' element={<News/>}/>
                  <Route path='/settings' element={<Settings/>}/>
                  <Route path='/login' element={<Login/>}/>
              </Routes>



          </div>
        </div>
            :<Preloader/>}

        </>


    );
}

export default App;



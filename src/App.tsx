import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Navbar/Nav";
import {Profile} from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

function App() {
    return (
        <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>

                </div>
            </div>

    );
}

export default App;

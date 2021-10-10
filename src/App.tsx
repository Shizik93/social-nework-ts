import React from "react";
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Navbar/Nav";

import {Profile} from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

import { Route } from "react-router-dom";
import {TypeRootState} from "./redux/state";
 type PropsType={
     state:TypeRootState
     dispatch:(action:any)=>void

 }

function App(props:PropsType) {

    return (

            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>


                    <Route path='/dialogs' render={() => <Dialogs newMessage={props.state.dialogsPage.newMessage} dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages} dispatch={props.dispatch}/>}/>
                    <Route path='/profile' render={() => <Profile  textarea={props.state.profilePage.textarea}post={props.state.profilePage.post} dispatch={props.dispatch}/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>

                </div>
            </div>

    );
}


export default App;

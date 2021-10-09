import React from "react";
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Navbar/Nav";

import {Profile} from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {TypeRootState} from "./redux/state";
import { Route } from "react-router-dom";
 type PropsType={
     state: TypeRootState
     addPost:()=>void
     onChangeTextArea:(value:string)=>void
 }

function App(props:PropsType) {

    return (

            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>


                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>
                    <Route path='/profile' render={() => <Profile  textarea={props.state.textarea}post={props.state.profilePage.post} addPost={props.addPost} onChangeTextArea={props.onChangeTextArea}/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>

                </div>
            </div>

    );
}


export default App;

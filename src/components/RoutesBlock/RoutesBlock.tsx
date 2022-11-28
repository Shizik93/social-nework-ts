import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Dialogs from '../Dialogs/Dialogs';
import Login from '../Login/Login';
import Music from '../Music/Music';
import News from '../News/News';
import { Profile } from '../Profile/Profile';
import Settings from '../Settings/Settings';
import { Users } from '../Users/Users';

export const RoutesBlock = () => {
  return (
    <div className="app-wrapper-content">
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/dialogs/" element={<Dialogs />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/music" element={<Music />} />
        <Route path="/news" element={<News />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

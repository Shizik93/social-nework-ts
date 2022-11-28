import React from 'react';

import { NavLink } from 'react-router-dom';

import { useAppSelector } from '../../redux/hooks/hooks';

import m from './Nav.module.css';

export const Nav = () => {
  const authUserId = useAppSelector(state => state.auth.userId);

  return (
    <nav className={m.nav}>
      <div className={`${m.item} ${m.active}`}>
        <NavLink to="/users" className={({ isActive }) => (isActive ? m.active : '')}>
          Users
        </NavLink>
      </div>
      <div className={`${m.item} ${m.active}`}>
        <NavLink
          to={`/profile/${authUserId}`}
          className={({ isActive }) => (isActive ? m.active : '')}
        >
          Profile
        </NavLink>
      </div>
      <div className={`${m.item} ${m.active}`}>
        <NavLink to="/dialogs" className={({ isActive }) => (isActive ? m.active : '')}>
          Messages
        </NavLink>
      </div>
      <div className={`${m.item} ${m.active}`}>
        <NavLink to="/news" className={({ isActive }) => (isActive ? m.active : '')}>
          News
        </NavLink>
      </div>
      <div className={`${m.item} ${m.active}`}>
        <NavLink to="/music" className={({ isActive }) => (isActive ? m.active : '')}>
          Music
        </NavLink>
      </div>
      <div className={`${m.item} ${m.active}`}>
        <NavLink to="/settings" className={({ isActive }) => (isActive ? m.active : '')}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

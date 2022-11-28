import React, { useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import img from '../../assets/images/userImg.png';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { getUsersTC, SetSubscribe, SetUnsubscribe } from '../../redux/users-reducer';
import { Paginator } from '../common/Paginator/Paginator';

import m from './users.module.css';

export const Users = () => {
  const dispatch = useAppDispatch();
  const pageSize = useAppSelector(state => state.usersReducer.pageSize);
  const currentPage = useAppSelector(state => state.usersReducer.currentPage);
  const subscribeUsers = useAppSelector(state => state.usersReducer.subscribeUsers);
  const users = useAppSelector(state => state.usersReducer.users);

  useEffect(() => {
    dispatch(getUsersTC(currentPage, pageSize));
  }, []);

  return (
    <>
      <Paginator />

      {users.map(f => (
        <div key={f.id}>
          <div>
            <NavLink to={`/profile/${f.id}`}>
              <img
                className={m.photo}
                src={f.photos.small !== null ? f.photos.small : img}
              />
            </NavLink>
          </div>
          <div>{f.name}</div>
          <div>{f.status}</div>
          {f.followed ? (
            <button
              disabled={subscribeUsers.some(id => id === f.id)}
              onClick={() => {
                dispatch(SetSubscribe(f.id));
              }}
            >
              Unsubscribe
            </button>
          ) : (
            <button
              disabled={subscribeUsers.some(id => id === f.id)}
              onClick={() => {
                dispatch(SetUnsubscribe(f.id));
              }}
            >
              Subscribe
            </button>
          )}
        </div>
      ))}
    </>
  );
};

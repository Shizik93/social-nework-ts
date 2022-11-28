import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useAppDispatch } from '../../redux/hooks/hooks';
import { getUserProfileStatusTC, getUserProfileTC } from '../../redux/profile-reducer';

import { MyPosts } from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

export const Profile = () => {
  const { userId } = useParams<string>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(getUserProfileTC(userId));
      dispatch(getUserProfileStatusTC(userId));
    }
  }, []);

  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

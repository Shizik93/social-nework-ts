import React, { useState } from 'react';

type ProfileStatusPropsType = {
  status: string;
  updateStatus: (status: string) => void;
};
export const ProfileStatus = ({ status, updateStatus }: ProfileStatusPropsType) => {
  const [editableMode, setEditableMod] = useState(false);
  const [currentStatus, setCurrentStatus] = useState('');
  const onChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editableMode ? (
        <span onDoubleClick={() => setEditableMod(true)}>Status:{status}</span>
      ) : (
        <input
          value={currentStatus}
          onChange={onChangeStatus}
          onBlur={() => {
            updateStatus(status);
            setEditableMod(false);
          }}
        />
      )}
    </div>
  );
};

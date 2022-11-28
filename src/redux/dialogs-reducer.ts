// eslint-disable-next-line import/no-extraneous-dependencies
import { v1 } from 'uuid';

const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

const initialState: initialDialogsStateType = {
  messages: [
    { message: 'Hi' },
    { message: 'How is your it-kamasutra?' },
    { message: 'Yo' },
  ],
  dialogs: [
    { id: v1(), name: 'Dimych' },
    { id: v1(), name: 'Andrey' },
    { id: v1(), name: 'Sveta' },
    { id: v1(), name: 'Sasha' },
    { id: v1(), name: 'Victor' },
    { id: v1(), name: 'Valera' },
  ],
};

export const dialogsReducer = (
  // eslint-disable-next-line default-param-last
  state: initialDialogsStateType = initialState,
  action: dialogsReducerType,
): initialDialogsStateType => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return { ...state, messages: [...state.messages, { message: action.value }] };
    }
    default:
      return state;
  }
};

export const SendMessageAC = (value: any) => {
  return {
    type: SEND_MESSAGE,
    value,
  } as const;
};

export type TypeDialogs = {
  id: string;
  name: string;
};
export type TypeMessage = {
  message: string;
};
export type TypeDialogsPage = {
  messages: Array<TypeMessage>;
  dialogs: Array<TypeDialogs>;
};
export type initialDialogsStateType = TypeDialogsPage;
export type dialogsReducerType = ReturnType<typeof SendMessageAC>;

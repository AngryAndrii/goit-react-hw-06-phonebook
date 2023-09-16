import { nanoid } from 'nanoid';
import { createAction, createReducer } from '@reduxjs/toolkit';

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const addContact = createAction('contacts/add', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name: name,
      number: number,
    },
  };
});

export const deleteContact = createAction('contacts/delete');

export const contactsReducer = createReducer(contacts, builder =>
  builder
    .addCase(addContact, (state, action) => {
      return [...state, action.payload];
    })
    .addCase(deleteContact, (state, action) => {
      return state.filter(el => el.id !== action.payload);
    })
);

// export const contactsReducer = (state = contacts, action) => {
//   switch (action.type) {
//     case 'contacts/add':
//       return [...state, action.payload];
//     case 'contacts/delete':
//       return state.filter(el => el.id !== action.payload);
//     default:
//       return state;
//   }
// };

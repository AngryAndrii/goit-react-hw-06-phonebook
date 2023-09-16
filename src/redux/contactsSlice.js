import { nanoid } from 'nanoid';

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const addContact = (name, number) => {
  return {
    type: 'contacts/add',
    payload: {
      id: nanoid(),
      name: name,
      number: number,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/delete',
    payload: contactId,
  };
};

export const contactsReducer = (state = contacts, action) => {
  switch (action.type) {
    case 'contacts/add':
      return [...state, action.payload];
    case 'contacts/delete':
      return state.filter(el => el.id !== action.payload);
    default:
      return state;
  }
};
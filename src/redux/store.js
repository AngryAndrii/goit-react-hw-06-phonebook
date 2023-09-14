import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/delete': {
      return {
        ...state,
        contacts: state.contacts.filter(el => el.id !== action.payload),
      };
    }

    case 'contacts/filter': {
      return {
        ...state,
        value: state.contacts.filter(el =>
          el.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    }

    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

export const addContact = () => {
  return {
    type: 'contacts/add',
    payload: 'Payload value',
  };
};

export const filterContacts = value => {
  return {
    type: 'contacts/filter',
    payload: value,
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/delete',
    payload: contactId,
  };
};

const filter = '';

export const setFilter = filter => {
  return {
    type: 'contacts/filter',
    payload: filter,
  };
};

export const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case 'contacts/filter':
      return action.payload;
    default:
      return state;
  }
};

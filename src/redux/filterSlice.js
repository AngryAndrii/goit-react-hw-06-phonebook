import { createSlice } from '@reduxjs/toolkit';

const filter = '';

const slice = createSlice({
  name: 'filter',
  initialState: filter,
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = slice.actions;
export const filterReducer = slice.reducer;

// export const setFilter = createAction('contacts/filter');

// export const filterReducer = createReducer(filter, builder =>
//   builder.addCase(setFilter, (state, action) => {
//     return action.payload;
//   })
// );

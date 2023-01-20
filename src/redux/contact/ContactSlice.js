import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addContactAction(state, action) {
//       return [...state.items, action.payload];
//     },
//     removeContactAction(state, action) {
//       return state.items.filter(item => item.id !== action.payload);
//     },
//   },
// });

// export const { addContactAction, removeContactAction } = contactSlice.actions;
// export const contactsReducer = contactSlice.reducer;

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contact/ContactSlice';
import { filterReducer } from './filters/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

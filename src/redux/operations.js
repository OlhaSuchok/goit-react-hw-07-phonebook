import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63ca872ad0ab64be2b54ad5b.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll ',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      console.log(data);
      return data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact ',
  async ({ name, phone }, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', { name, phone });
      console.log(data);
      return data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }

  // ,
  // {
  //   condition: (user, thunkAPI) => {
  //     const state = thunkAPI.getState();
  //     const { users } = state;
  //     const isUserExist = users.users.find(
  //       person => person.name === user.name || person.phone === user.phone
  //     );
  //     if (isUserExist) {
  //       alert(`${user.name} already in your contacts`);
  //       return false;
  //     }
  //   },
  // }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact ',
  async (taskId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${taskId}`);
      console.log(data);
      return data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);

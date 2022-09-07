import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import {
  getContacts,
  postContact,
  fetchDeleteContact,
} from '../../api/contactsApi.js';

export const getAllContacts = createAsyncThunk(
  'contacts/requestStatus',
  async () => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return Notify.failure(`Sory, ${error}`);
    }
  }
);

export const addNewContacts = createAsyncThunk(
  'contacts/addContacts',
  async contact => {
    try {
      await postContact(contact);
      Notify.success('Contact added!');
      const data = await getContacts();
      return data;
    } catch (error) {
      return Notify.failure(`Sory, ${error}`);
    }
  }
);

export const deleteCurrentContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      await fetchDeleteContact(id);
      Notify.success('Contact deleted!');
      const data = await getContacts();
      return data;
    } catch (error) {
        return Notify.failure(`Sory, ${error}`);
    }
  }
);

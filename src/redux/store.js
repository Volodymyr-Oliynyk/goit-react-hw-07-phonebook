import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsReduser';
import middleware from './middleware';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
});


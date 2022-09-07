import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsReduser';
// import { persistedReducer } from './contacts';
import middleware from './middleware';
// import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
});

// export const persistor = persistStore(store);

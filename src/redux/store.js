import { contactsApi } from '../services/contactsAPI';
import { configureStore } from '@reduxjs/toolkit';
import { filter } from './phonebook-reducers';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filter,
  },
  middleware: GetDefaultMiddleware => [
    ...GetDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

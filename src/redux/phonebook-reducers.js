import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './phonebook-actions';

export const filter = createReducer('', {
  [changeFilter]: (state, { payload }) => payload,
});

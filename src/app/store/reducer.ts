import { createReducer, on } from '@ngrx/store';
import { setData } from './action';
import { AppState } from './state';

const initialState: AppState = {
title:'Dashboard',

counter:0,
totalPrice:0
};

export const dataReducer = createReducer(
  initialState,
  on(setData, (state, { data }) => ({ ...state, data }))
);

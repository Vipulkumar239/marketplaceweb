import { createAction, props } from '@ngrx/store';
import { AppState } from './state';


export const setData = createAction(
  '[Dashboard Component] Set Data',
  props<{ data: AppState }>()
);

import { createReducer, on } from '@ngrx/store';
import { setCountryList } from './../actions/country-list.actions';

export const initialState: any[] = [];

export const countryListReducer = createReducer(
  initialState,
  on(setCountryList, (state, { payload }: any) => payload)
);

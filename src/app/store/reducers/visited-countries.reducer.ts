import { createReducer, on } from '@ngrx/store';
import { addVisitedCountry } from '../actions/visited-countries.actions';

export const initialState: any[] = [];

export const visitedCountriesReducer = createReducer(
  initialState,
  on(addVisitedCountry, (state, { payload }: any) =>
    state.some((country) => country.numericCode === payload.numericCode)
      ? state
      : [...state, payload]
  )
);

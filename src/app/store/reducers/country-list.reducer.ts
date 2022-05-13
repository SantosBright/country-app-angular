import { createReducer, on } from '@ngrx/store';
import { setCountryList } from './../actions/country-list.actions';

export const initialState: any[] = [
  {
    population: 40218234,
    flags: {
      svg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
    },
  },
];

export const countryListReducer = createReducer(
  initialState,
  on(setCountryList, (state, payload) => {
    console.log('reducer____', state);
    return state;
  })
);

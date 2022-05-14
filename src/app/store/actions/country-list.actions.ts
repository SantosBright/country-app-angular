import { createAction } from '@ngrx/store';

export const setCountryList = createAction('[CountryList] set');

export const loadCountryList = createAction('[CountryList] load countries');
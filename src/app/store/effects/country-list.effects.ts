import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { CountryListService } from 'src/app/country-list/country-list.service';
import { loadCountryList } from '../actions/country-list.actions';

@Injectable()
export class CountryListEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCountryList),
      mergeMap(() =>
        this.countryListService.getCountries().pipe(
          map((movies) => ({
            type: '[CountryList] set',
            payload: movies,
          })),
          catchError((err) => {
            console.log('errr_', err);
            return of({ type: '[Movies API] Movies Loaded Error' });
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private countryListService: CountryListService
  ) {}
}

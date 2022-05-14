import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent {
  countries$: Observable<any[]>;
  filterCountries$: Observable<any[]>;
  search$: Observable<string>;
  search: FormControl = new FormControl('');
  filter$: Observable<string>;
  filter: FormControl = new FormControl('');
  visitedCountries$: Observable<any[]>;

  constructor(
    private store: Store<{ countryList: any[]; visitedCountries: any[] }>
  ) {
    this.search$ = this.search.valueChanges.pipe(startWith(''));
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.countries$ = this.store.select((state) => state.countryList);
    this.visitedCountries$ = this.store.select(
      (state) => state.visitedCountries
    );

    this.filterCountries$ = combineLatest([
      this.countries$,
      this.search$,
      this.filter$,
    ]).pipe(
      map(([countries, searchString, filterString]: any) =>
        countries.filter(
          (country: any) =>
            country.name.toLowerCase().includes(searchString.toLowerCase()) &&
            country.region.toLowerCase().includes(filterString.toLowerCase())
        )
      )
    );
  }

  addVisitedCountry(country: any) {
    this.store.dispatch({ type: '[VisitedCountries] add', payload: country });
  }

  ngOnInit() {
    this.store.dispatch({ type: '[CountryList] load countries' });
  }
}

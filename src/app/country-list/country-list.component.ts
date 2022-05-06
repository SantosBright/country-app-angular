import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { CountryListService } from './country-list.service';

@Component({
  selector: 'country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent {
  countries: Observable<any[]>;
  filterCountries$: Observable<any[]>;
  search$: Observable<string>;
  search: FormControl = new FormControl('');
  filter$: Observable<string>;
  filter: FormControl = new FormControl('');

  constructor(private countryListService: CountryListService) {
    this.search$ = this.search.valueChanges.pipe(startWith(''));
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.countries = this.countryListService.getCountries();

    this.filterCountries$ = combineLatest([
      this.countries,
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
}

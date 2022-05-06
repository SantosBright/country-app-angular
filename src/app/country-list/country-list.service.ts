import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryListService {
  private allCountriesUrl = 'https://restcountries.com/v2/all';

  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get<any>(this.allCountriesUrl);
  }
}

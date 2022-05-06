import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryDetailService {
  private countryUrl = 'https://restcountries.com/v3.1/alpha';

  constructor(private http: HttpClient) {}

  getCountry(code: string) {
    return this.http.get<any>(`${this.countryUrl}/${code}`);
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryDetailService } from './coutry-detail.service';

@Component({
  selector: 'country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent {
  country: any = {};
  loading: boolean = true;
  currencies: string = '';
  languages: string = '';

  constructor(
    private route: ActivatedRoute,
    private countryDetailService: CountryDetailService
  ) {}

  ngOnInit(): void {
    console.log('route__', this.route);
    this.countryDetailService
      .getCountry(this.route.snapshot.params['countryId'])
      .subscribe((data) => {
        this.country = data[0];
        this.currencies = Object.keys(data[0].currencies)
          .map(
            (currency) =>
              `${data[0].currencies[currency].name} (${data[0].currencies[currency].symbol})`
          )
          .join(', ');
        this.languages = Object.keys(data[0].languages)
          .map((language) => `${data[0].languages[language]}`)
          .join(', ');
      });
  }
}

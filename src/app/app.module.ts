import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './country-list/country-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CountryDetailComponent } from './country-list/country-detail/country-detail.component';
import { countryListReducer } from './store/reducers/country-list.reducer';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CountryListEffects } from './store/effects/country-list.effects';
import { visitedCountriesReducer } from './store/reducers/visited-countries.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CountryListComponent,
    CountryDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      countryList: countryListReducer,
      visitedCountries: visitedCountriesReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    EffectsModule.forRoot([CountryListEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ShortenPipe} from './shared/shorten.pipe';
import {GooglePlaceDirective} from './directives/google-place.directive';
import {GooglePlacesAutocompleteSearchComponent} from './google-places-autocomplete-search/google-places-autocomplete-search.component';
import {AppMaterialModule} from './material/app-material.module';
import {AgmCoreModule} from '@agm/core';
import {ReactiveFormsModule} from "@angular/forms";
import { ShortenPipeDemoComponent } from './shorten-pipe-demo/shorten-pipe-demo.component';
import {
  ProfileComponent
} from './editable-profile-component/editable-profile-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    GooglePlacesAutocompleteSearchComponent,
    ShortenPipeDemoComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbZ6Y8PJmcZJxNEuP1fAFJIqkudmR_jIY',
      libraries: [
        'places'
      ]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

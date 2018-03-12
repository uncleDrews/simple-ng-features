// import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
// import { GoogleApiService } from '../services/google-api.service';
//
// export const ENTER_KEY = 13;
//
// declare var google: any;
//
// @Directive({
//   selector: '[appGooglePlace]',
// })
// export class GooglePlaceDirective {
//   autoComplete: any;
//   private _el: HTMLElement;
//
//   @Output() setAddress: EventEmitter<any> = new EventEmitter();
//
//   @HostListener('keydown', ['$event'])
//   onKeyDown(event: any): void {
//     if (event.keyCode === ENTER_KEY) {
//       event.preventDefault();
//     }
//   }
//
//   constructor(public el: ElementRef, private googleApi: GoogleApiService) {
//     this._el = el.nativeElement;
//     this.googleApi.initGoogleApi().then(() => this.initializeAutoComplete());
//   }
//
//   private initializeAutoComplete() {
//     const input = this._el;
//
//     this.autoComplete = new google.maps.places.Autocomplete(input as HTMLInputElement, { types: ['geocode'] });
//     google.maps.event.addListener(this.autoComplete, 'place_changed', () => {
//       this.setAddress.emit(this.autoComplete.getPlace().formatted_address);
//     });
//   }
// }

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglePlacesAutocompleteSearchComponent } from './google-places-autocomplete-search.component';

describe('GooglePlacesAutocompleteSearchComponent', () => {
  let component: GooglePlacesAutocompleteSearchComponent;
  let fixture: ComponentFixture<GooglePlacesAutocompleteSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglePlacesAutocompleteSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglePlacesAutocompleteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

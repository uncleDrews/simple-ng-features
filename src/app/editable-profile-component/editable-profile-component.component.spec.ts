import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableProfileComponentComponent } from './editable-profile-component.component';

describe('EditableProfileComponentComponent', () => {
  let component: EditableProfileComponentComponent;
  let fixture: ComponentFixture<EditableProfileComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableProfileComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

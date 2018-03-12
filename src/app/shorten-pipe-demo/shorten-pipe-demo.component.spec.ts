import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenPipeDemoComponent } from './shorten-pipe-demo.component';

describe('ShortenPipeDemoComponent', () => {
  let component: ShortenPipeDemoComponent;
  let fixture: ComponentFixture<ShortenPipeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortenPipeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenPipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

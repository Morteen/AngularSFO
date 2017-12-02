import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SjekkInnComponent } from './sjekk-inn.component';

describe('SjekkInnComponent', () => {
  let component: SjekkInnComponent;
  let fixture: ComponentFixture<SjekkInnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SjekkInnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SjekkInnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegElevComponent } from './reg-elev.component';

describe('RegElevComponent', () => {
  let component: RegElevComponent;
  let fixture: ComponentFixture<RegElevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegElevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegElevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

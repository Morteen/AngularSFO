import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisAlleEleverComponent } from './vis-alle-elever.component';

describe('VisAlleEleverComponent', () => {
  let component: VisAlleEleverComponent;
  let fixture: ComponentFixture<VisAlleEleverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisAlleEleverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisAlleEleverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

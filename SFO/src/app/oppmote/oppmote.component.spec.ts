import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OppmoteComponent } from './oppmote.component';

describe('OppmoteComponent', () => {
  let component: OppmoteComponent;
  let fixture: ComponentFixture<OppmoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppmoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OppmoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

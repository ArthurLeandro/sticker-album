import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontCoverComponent } from './front-cover.component';

describe('FrontCoverComponent', () => {
  let component: FrontCoverComponent;
  let fixture: ComponentFixture<FrontCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

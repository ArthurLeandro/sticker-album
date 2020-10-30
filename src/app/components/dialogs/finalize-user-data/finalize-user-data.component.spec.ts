import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizeUserDataComponent } from './finalize-user-data.component';

describe('FinalizeUserDataComponent', () => {
  let component: FinalizeUserDataComponent;
  let fixture: ComponentFixture<FinalizeUserDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizeUserDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizeUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

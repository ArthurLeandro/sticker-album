import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDialogComponent } from './buyer-dialog.component';

describe('BuyerDialogComponent', () => {
  let component: BuyerDialogComponent;
  let fixture: ComponentFixture<BuyerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

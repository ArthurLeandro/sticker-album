import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoStickersComponent } from './two-stickers.component';

describe('TwoStickersComponent', () => {
  let component: TwoStickersComponent;
  let fixture: ComponentFixture<TwoStickersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoStickersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoStickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

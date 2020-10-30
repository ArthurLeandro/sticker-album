import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementaryDataComponent } from './complementary-data.component';

describe('ComplementaryDataComponent', () => {
  let component: ComplementaryDataComponent;
  let fixture: ComponentFixture<ComplementaryDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplementaryDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplementaryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

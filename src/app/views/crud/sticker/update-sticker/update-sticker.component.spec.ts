import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStickerComponent } from './update-sticker.component';

describe('UpdateStickerComponent', () => {
  let component: UpdateStickerComponent;
  let fixture: ComponentFixture<UpdateStickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

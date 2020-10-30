import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStickerComponent } from './create-sticker.component';

describe('CreateStickerComponent', () => {
  let component: CreateStickerComponent;
  let fixture: ComponentFixture<CreateStickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStickerComponent } from './delete-sticker.component';

describe('DeleteStickerComponent', () => {
  let component: DeleteStickerComponent;
  let fixture: ComponentFixture<DeleteStickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteStickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumSideViewComponent } from './album-side-view.component';

describe('AlbumSideViewComponent', () => {
  let component: AlbumSideViewComponent;
  let fixture: ComponentFixture<AlbumSideViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumSideViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumSideViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

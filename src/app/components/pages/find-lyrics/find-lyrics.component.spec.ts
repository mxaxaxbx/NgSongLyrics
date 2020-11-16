import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLyricsComponent } from './find-lyrics.component';

describe('FindLyricsComponent', () => {
  let component: FindLyricsComponent;
  let fixture: ComponentFixture<FindLyricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindLyricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindLyricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

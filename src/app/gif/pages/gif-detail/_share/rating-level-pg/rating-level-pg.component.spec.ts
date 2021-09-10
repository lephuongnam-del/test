import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingLevelPgComponent } from './rating-level-pg.component';

describe('RatingLevelPgComponent', () => {
  let component: RatingLevelPgComponent;
  let fixture: ComponentFixture<RatingLevelPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingLevelPgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingLevelPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

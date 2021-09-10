import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingLevelGComponent } from './rating-level-g.component';

describe('RatingLevelGComponent', () => {
  let component: RatingLevelGComponent;
  let fixture: ComponentFixture<RatingLevelGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingLevelGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingLevelGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

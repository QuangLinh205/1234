import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailWeightComponent } from './detail-weight.component';

describe('DetailWeightComponent', () => {
  let component: DetailWeightComponent;
  let fixture: ComponentFixture<DetailWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailWeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

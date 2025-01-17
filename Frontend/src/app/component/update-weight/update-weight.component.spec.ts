import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWeightComponent } from './update-weight.component';

describe('UpdateWeightComponent', () => {
  let component: UpdateWeightComponent;
  let fixture: ComponentFixture<UpdateWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateWeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

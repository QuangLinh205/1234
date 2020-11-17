import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWeightComponent } from './delete-weight.component';

describe('DeleteWeightComponent', () => {
  let component: DeleteWeightComponent;
  let fixture: ComponentFixture<DeleteWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteWeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

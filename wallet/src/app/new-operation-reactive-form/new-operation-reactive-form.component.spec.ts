import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOperationReactiveFormComponent } from './new-operation-reactive-form.component';

describe('NewOperationReactiveFormComponent', () => {
  let component: NewOperationReactiveFormComponent;
  let fixture: ComponentFixture<NewOperationReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOperationReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewOperationReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

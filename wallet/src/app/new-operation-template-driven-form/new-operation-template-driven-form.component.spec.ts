import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOperationTemplateDrivenFormComponent } from './new-operation-template-driven-form.component';

describe('NewOperationTemplateDrivenFormComponent', () => {
  let component: NewOperationTemplateDrivenFormComponent;
  let fixture: ComponentFixture<NewOperationTemplateDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOperationTemplateDrivenFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewOperationTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

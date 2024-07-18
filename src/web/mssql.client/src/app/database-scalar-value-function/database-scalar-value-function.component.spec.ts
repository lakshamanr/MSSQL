import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseScalarValueFunctionComponent } from './database-scalar-value-function.component';

describe('DatabaseScalarValueFunctionComponent', () => {
  let component: DatabaseScalarValueFunctionComponent;
  let fixture: ComponentFixture<DatabaseScalarValueFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabaseScalarValueFunctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseScalarValueFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

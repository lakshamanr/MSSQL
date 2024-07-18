import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseScalarValueFunctionsComponent } from './database-scalar-value-functions.component';

describe('DatabaseScalarValueFunctionsComponent', () => {
  let component: DatabaseScalarValueFunctionsComponent;
  let fixture: ComponentFixture<DatabaseScalarValueFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabaseScalarValueFunctionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseScalarValueFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

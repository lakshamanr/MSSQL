import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseUserDefinedDataTypesComponent } from './database-user-defined-data-types.component';

describe('DatabaseUserDefinedDataTypesComponent', () => {
  let component: DatabaseUserDefinedDataTypesComponent;
  let fixture: ComponentFixture<DatabaseUserDefinedDataTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabaseUserDefinedDataTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseUserDefinedDataTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

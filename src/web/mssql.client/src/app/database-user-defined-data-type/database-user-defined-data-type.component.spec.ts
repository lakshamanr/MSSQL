import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseUserDefinedDataTypeComponent } from './database-user-defined-data-type.component';

describe('DatabaseUserDefinedDataTypeComponent', () => {
  let component: DatabaseUserDefinedDataTypeComponent;
  let fixture: ComponentFixture<DatabaseUserDefinedDataTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabaseUserDefinedDataTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseUserDefinedDataTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

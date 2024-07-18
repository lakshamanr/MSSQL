import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseTableValueFunctionsComponent } from './database-table-value-functions.component';

describe('DatabaseTableValueFunctionsComponent', () => {
  let component: DatabaseTableValueFunctionsComponent;
  let fixture: ComponentFixture<DatabaseTableValueFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabaseTableValueFunctionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseTableValueFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

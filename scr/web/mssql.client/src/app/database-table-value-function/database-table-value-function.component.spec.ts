import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseTableValueFunctionComponent } from './database-table-value-function.component';

describe('DatabaseTableValueFunctionComponent', () => {
  let component: DatabaseTableValueFunctionComponent;
  let fixture: ComponentFixture<DatabaseTableValueFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabaseTableValueFunctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseTableValueFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

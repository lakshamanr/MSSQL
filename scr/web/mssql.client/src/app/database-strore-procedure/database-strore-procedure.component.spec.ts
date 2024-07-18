import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseStroreProcedureComponent } from './database-strore-procedure.component';

describe('DatabaseStroreProcedureComponent', () => {
  let component: DatabaseStroreProcedureComponent;
  let fixture: ComponentFixture<DatabaseStroreProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabaseStroreProcedureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseStroreProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

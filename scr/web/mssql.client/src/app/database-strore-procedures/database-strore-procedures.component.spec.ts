import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseStroreProceduresComponent } from './database-strore-procedures.component';

describe('DatabaseStroreProceduresComponent', () => {
  let component: DatabaseStroreProceduresComponent;
  let fixture: ComponentFixture<DatabaseStroreProceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabaseStroreProceduresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseStroreProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

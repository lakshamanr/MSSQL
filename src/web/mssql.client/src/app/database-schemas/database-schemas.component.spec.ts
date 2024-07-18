import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseSchemasComponent } from './database-schemas.component';

describe('DatabaseSchemasComponent', () => {
  let component: DatabaseSchemasComponent;
  let fixture: ComponentFixture<DatabaseSchemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabaseSchemasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseSchemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

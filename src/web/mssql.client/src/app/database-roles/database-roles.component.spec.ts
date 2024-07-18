import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseRolesComponent } from './database-roles.component';

describe('DatabaseRolesComponent', () => {
  let component: DatabaseRolesComponent;
  let fixture: ComponentFixture<DatabaseRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabaseRolesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

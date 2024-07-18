import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseRoleComponent } from './database-role.component';

describe('DatabaseRoleComponent', () => {
  let component: DatabaseRoleComponent;
  let fixture: ComponentFixture<DatabaseRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabaseRoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseUserComponent } from './database-user.component';

describe('DatabaseUserComponent', () => {
  let component: DatabaseUserComponent;
  let fixture: ComponentFixture<DatabaseUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabaseUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseTriggerComponent } from './database-trigger.component';

describe('DatabaseTriggerComponent', () => {
  let component: DatabaseTriggerComponent;
  let fixture: ComponentFixture<DatabaseTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabaseTriggerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

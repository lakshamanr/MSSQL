import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseTriggersComponent } from './database-triggers.component';

describe('DatabaseTriggersComponent', () => {
  let component: DatabaseTriggersComponent;
  let fixture: ComponentFixture<DatabaseTriggersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabaseTriggersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseTriggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

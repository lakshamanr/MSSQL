import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseViewsComponent } from './database-views.component';

describe('DatabaseViewsComponent', () => {
  let component: DatabaseViewsComponent;
  let fixture: ComponentFixture<DatabaseViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabaseViewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseFullTextCatalogsComponent } from './database-full-text-catalogs.component';

describe('DatabaseFullTextCatalogsComponent', () => {
  let component: DatabaseFullTextCatalogsComponent;
  let fixture: ComponentFixture<DatabaseFullTextCatalogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabaseFullTextCatalogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseFullTextCatalogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

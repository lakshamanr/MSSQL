import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseFullTextCatalogComponent } from './database-full-text-catalog.component';

describe('DatabaseFullTextCatalogComponent', () => {
  let component: DatabaseFullTextCatalogComponent;
  let fixture: ComponentFixture<DatabaseFullTextCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabaseFullTextCatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseFullTextCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

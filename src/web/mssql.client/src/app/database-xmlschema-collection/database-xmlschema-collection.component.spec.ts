import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseXMLSchemaCollectionComponent } from './database-xmlschema-collection.component';

describe('DatabaseXMLSchemaCollectionComponent', () => {
  let component: DatabaseXMLSchemaCollectionComponent;
  let fixture: ComponentFixture<DatabaseXMLSchemaCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabaseXMLSchemaCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseXMLSchemaCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

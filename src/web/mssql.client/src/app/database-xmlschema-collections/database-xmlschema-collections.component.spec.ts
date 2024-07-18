import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseXMLSchemaCollectionsComponent } from './database-xmlschema-collections.component';

describe('DatabaseXMLSchemaCollectionsComponent', () => {
  let component: DatabaseXMLSchemaCollectionsComponent;
  let fixture: ComponentFixture<DatabaseXMLSchemaCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabaseXMLSchemaCollectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseXMLSchemaCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

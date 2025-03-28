import { Component, OnInit } from '@angular/core';
 
import { SchemaService } from '../../services/schema.service';
import { SchemaDescription } from '../../models/schema-description';

@Component({
  selector: 'app-schemas',
  templateUrl: './schemas.component.html',
  styleUrls: ['./schemas.component.css']
})
export class SchemasComponent implements OnInit {

  schemas: SchemaDescription[] = [];

  constructor(private schemaService: SchemaService) { }

  ngOnInit(): void {
    this.schemaService.getAllSchemas().subscribe(data => {
      this.schemas = data;
    });
  }

}

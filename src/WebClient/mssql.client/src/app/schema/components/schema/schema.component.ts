import { Component, OnInit } from '@angular/core';
import { SchemaMetadata } from '../../models/schema-metadata';
import { ActivatedRoute } from '@angular/router';
import { SchemaService } from '../../services/schema.service';

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css']
})
export class SchemaComponent implements OnInit {

  schema: SchemaMetadata | null = null;
  schemaName :string;
  msDescription = '';
  iblnShowEditBox = false;
  constructor(private route: ActivatedRoute, private schemaService: SchemaService) { }

  ngOnInit(): void { 
    this.schemaName = this.route.snapshot.params.objectname;
    if (this.schemaName) {
      this.schemaService.getSchemaMetadata(this.schemaName).subscribe(data => {
        this.schema = data;
      });
    }
  }

}

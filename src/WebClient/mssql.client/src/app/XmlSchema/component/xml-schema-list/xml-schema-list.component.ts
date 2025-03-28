import { Component, OnInit } from '@angular/core';
import { XmlSchemaCollection } from '../../model/xml-schema.model';
import { XmlSchemaService } from '../../service/xml-schema.service';
 
@Component({
  selector: 'app-xml-schema-list',
  templateUrl: './xml-schema-list.component.html',
  styleUrls: ['./xml-schema-list.component.css']
})
export class XmlSchemaListComponent implements OnInit {
  collections: XmlSchemaCollection[] = [];

  constructor(private xmlSchemaService: XmlSchemaService) { }

  ngOnInit(): void {
    this.xmlSchemaService.getAllXmlSchemaCollections().subscribe(
      (data) =>
        (this.collections = data),
      (error) => console.error('Error fetching collections', error)
    );
  }
}

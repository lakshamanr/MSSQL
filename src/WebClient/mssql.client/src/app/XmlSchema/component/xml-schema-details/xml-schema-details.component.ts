import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { XmlSchemaDetails } from '../../model/xml-schema.model';
import { XmlSchemaService } from '../../service/xml-schema.service';
 
@Component({
  selector: 'app-xml-schema-details',
  templateUrl: './xml-schema-details.component.html',
  styleUrls: ['./xml-schema-details.component.css']
})
export class XmlSchemaDetailsComponent implements OnInit {
  schemaDetails: XmlSchemaDetails | null = null;
  schemaName: string = 'Person.AdditionalContactInfoSchemaCollection';
  msDescription = "";
  iblnShowEditBox = false;
  constructor(private route: ActivatedRoute, private xmlSchemaService: XmlSchemaService) { }

  ngOnInit(): void {
   /* this.schemaName = this.route.snapshot.paramMap.get('name') || '';*/
    this.xmlSchemaService.getXmlSchemaDetails(this.schemaName).subscribe(
      (data) => { this.schemaDetails = data, this.msDescription = this.schemaDetails.mS_Description },
      (error) => console.error('Error fetching schema details', error)
    );
  }
}

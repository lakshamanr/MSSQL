import { Component, OnInit } from '@angular/core';
import { UserDefinedDataType } from '../../models/UserDefinedDataType';
import { UserDefinedDataTypeService } from '../../services/user-defined-data-type.service';

@Component({
  selector: 'app-user-defined-data-types',
  templateUrl: './user-defined-data-types.component.html',
  styleUrls: ['./user-defined-data-types.component.css']
})
export class UserDefinedDataTypesComponent implements OnInit {
  userDefinedDataTypes: UserDefinedDataType[] = [];
  constructor(private dataTypeService: UserDefinedDataTypeService) { }


  ngOnInit() {
    this.loadDataTypes();
  }
  loadDataTypes(): void {
    this.dataTypeService.getAllUserDefinedDataTypes().subscribe((data) => {
      this.userDefinedDataTypes = data;
    });
  }
}

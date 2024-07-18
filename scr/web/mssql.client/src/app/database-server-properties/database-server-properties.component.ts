import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table'; 
import { CustomerService } from '../Service/customer.service';
import { Customer } from '../Model/customer';
@Component({
  selector: 'app-database-server-properties',
  templateUrl: './database-server-properties.component.html',
  styleUrl: './database-server-properties.component.css'
})
export class DatabaseServerPropertiesComponent implements OnInit { 

  customers!: Customer[]; 
    constructor(private customerService: CustomerService)
     {

     }

    ngOnInit() {
        this.customerService.getCustomersLarge().then((customers) => {
            this.customers = customers;  
            this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
        }); 
    }

    clear(table: Table) {
        table.clear();
    } 
  }
 
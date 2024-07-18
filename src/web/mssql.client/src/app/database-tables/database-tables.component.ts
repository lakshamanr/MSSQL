import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Model/customer';
import { CustomerService } from '../Service/customer.service';
@Component({
  selector: 'app-database-tables',
  templateUrl: './database-tables.component.html',
  styleUrl: './database-tables.component.css'
})
export class DatabaseTablesComponent implements OnInit {
 
 
  customers!: Customer[]; 
  constructor(private customerService: CustomerService,private http: HttpClient)
   {

   }
   ngOnInit() {
    this.customerService.getCustomersLarge().then((customers) => {
        this.customers = customers;  
        this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
    }); 
}

}
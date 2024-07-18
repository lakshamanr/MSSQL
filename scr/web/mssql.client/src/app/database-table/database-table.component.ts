import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Model/customer';
import { CustomerService } from '../Service/customer.service';
@Component({
  selector: 'app-database-table',
  templateUrl: './database-table.component.html',
  styleUrl: './database-table.component.css'
})
export class DatabaseTableComponent {

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

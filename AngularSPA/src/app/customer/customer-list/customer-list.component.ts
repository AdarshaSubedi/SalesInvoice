import { Component, OnInit, ViewChild } from '@angular/core';
import { CustService } from '../cust.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustComponent } from '../cust/cust.component';
import { FormGroup } from '@angular/forms';
import { NotificationService } from '../notification.service';
  import { from } from 'rxjs';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  
  
  custid;
  customerList;
  displayedColumns: string[] = ['sn', 'customerName', 'customerEmail', 'customerContact', 'customerAddress', 'actions'];

  form: FormGroup;

  constructor(
    private service: CustService, private dialog: MatDialog, 
    private notificationservice: NotificationService) { }

  ngOnInit(): void {
    this.GetCustomerData();
    this.form = this.service.form;
  }

  GetCustomerData(){
    this.service.getAllCustomer().subscribe(data => {
      this.customerList = data;
    }); 
  }

  onCreate(){
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    const dialogRef = this.dialog.open(CustComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.GetCustomerData();
    });
    
  }

  onEdit(id){
    this.service.getCustomerById(id).subscribe(data => {
      this.custid = id;
      this.form.patchValue(data);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '50%';
      const dialogRef = this.dialog.open(CustComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        this.GetCustomerData();
      });
    });
  }

  onDelete(id){
    if(confirm('Are you sure?')){
      this.custid = id;
      this.service.deleteCustomerById(this.custid).subscribe(data => {
        this.GetCustomerData();
      });
      this.notificationservice.warn('! Deleted Successfully')
      
    }
  }

}

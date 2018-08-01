import { DataServiceService } from './../services/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private userData: any;
  private tableData: any;

  constructor(private service: DataServiceService) { }

  ngOnInit() {
    this.userData = this.service.getUserData();
    this.tableData = this.service.getTableData();
  }

}

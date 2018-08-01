import { DataServiceService } from './../services/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-pane',
  templateUrl: './left-pane.component.html',
  styleUrls: ['./left-pane.component.scss']
})
export class LeftPaneComponent implements OnInit {

  constructor(private service: DataServiceService) {
  }
  private menu: any;
  private userData: any;
  private selectedValue: number ;

  ngOnInit() {
    this.menu = this.service.getMenu();
    this.userData = this.service.getUserData();
    this.makeItActive(0);
  }

  makeItActive(index) {
    this.selectedValue = index;
  }

}

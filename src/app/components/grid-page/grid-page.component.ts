import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { RequestDataService } from 'src/app/shared/services/request-data.service';

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.css'],
})
export class GridPageComponent implements OnInit {
  employeesData = this.requestData.employees;
  leaveRequestsConclusionData: any;
  deleteSign: boolean = false;
  searchInp:any=''

  randomColorStatus: any = [
    'st-request-level',
    'st-under-approval',
    'st-request-approved',
    'st-closes-transaction',
    'st-returned',
    'st-extended-leave-request',
  ];
  randomProfileImgs: any = [
    'assets/imgs/blank-profile1.jpg',
    'assets/imgs/blank-profile2.jpg',
    'assets/imgs/blank-profile3.jpg',
  ];

  canEdit: boolean = true;
  clearSearchInp() {
    this.searchInp = '';
    this.deleteSign = false;
  }
  writing() {
    this.deleteSign = true;
    if (!this.searchInp) {

      this.deleteSign = false;
    }
  }
  edit() {
    this.canEdit = false;
  }
  save() {
    this.canEdit = true;
    this.requestData.saveconclosionFromLocalStorage();
    this.router.navigate(['/leavesBoard']);

  }
  getRandomStatus() {
    for (let i = 0; i < this.leaveRequestsConclusionData.length; i++) {
      this.leaveRequestsConclusionData[i].requestStatus =
        this.randomColorStatus[
          Math.floor(Math.random() * this.randomColorStatus.length)
        ];
      this.leaveRequestsConclusionData[i].profileImg =
        this.randomProfileImgs[
          Math.floor(Math.random() * this.randomProfileImgs.length)
        ];
    }
  }

  constructor(
    private requestData: RequestDataService,
    private router: Router
  ) {

    this.employeesData = this.requestData.getFromLocalStorage();

    this.leaveRequestsConclusionData =this.requestData.getconclosionFromLocalStorage();

  }

  update(e: any, index: any, key: any) {
   this.requestData.leaveRequestsConclusion[index][key] = e.target.value;

  }

  ngOnInit(): void {
    this.getRandomStatus()
  }
}

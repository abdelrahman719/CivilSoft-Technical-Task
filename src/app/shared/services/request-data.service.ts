import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequestDataService {
  employees: any = [
    {
      code: '42363',
      name: 'abdo',
      jobTitle: 'chemist',
      salaryProfile: '2.5 le',
      joiningDate: '7-7-2020',
      location: [{ country: 'egypt', city: 'alex', area: 'agami' }],
      leaveRequests: [],
    },
    {
      code: '43369',
      name: 'sara',
      jobTitle: 'pharmacist',
      salaryProfile: '250 M$',
      joiningDate: '7-7-2020',
      location: [{ country: 'france', city: 'paris', area: 'street45' }],
      leaveRequests: [],
    },
    {
      code: '43360',
      name: 'ali',
      jobTitle: 'chemist',
      salaryProfile: '250',
      joiningDate: '7-7-2020',
      location: [{ country: 'egypt', city: 'cairo', area: 'ramsis' }],
      leaveRequests: [],
    },
    {
      code: '4010',
      name: 'alex',
      jobTitle: 'none',
      salaryProfile: '522',
      joiningDate: '7-7-2020',
      location: [{ country: 'egypt', city: 'cairo', area: 'ramsis' }],
      leaveRequests: [],
    },
    {
      code: '407',
      name: 'zero',
      jobTitle: 'front-end',
      salaryProfile: '250',
      joiningDate: '7-7-2020',
      location: [{ country: 'egypt', city: 'cairo', area: 'ramsis' }],
      leaveRequests: [],
    },
    {
      code: '112',
      name: 'joker',
      jobTitle: 'movie maker',
      salaryProfile: '250',
      joiningDate: '7-7-2020',
      location: [{ country: 'egypt', city: 'cairo', area: 'ramsis' }],
      leaveRequests: [],
    },
  ];
  leaveRequestsConclusion: any = [

  ];

  saveInlocalStorage() {
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }
  getFromLocalStorage() {
    if (localStorage.getItem('employees') == null) {
      localStorage.setItem('employees', JSON.stringify(this.employees));
    } else {
      this.employees = JSON.parse(localStorage.getItem(`employees`) || '{}');
      return this.employees;
    }
  }

  saveconclosionFromLocalStorage(){
    localStorage.setItem('leaveRequestsConclusion', JSON.stringify(this.leaveRequestsConclusion));

  }
  getconclosionFromLocalStorage() {
    if (localStorage.getItem('leaveRequestsConclusion') == null) {
      localStorage.setItem('leaveRequestsConclusion', JSON.stringify(this.leaveRequestsConclusion));
    } else {
      this.leaveRequestsConclusion = JSON.parse(localStorage.getItem(`leaveRequestsConclusion`) || '{}');
      return this.leaveRequestsConclusion;
    }
  }



  constructor() {}
}

import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RequestDataService } from 'src/app/shared/services/request-data.service';

@Component({
  selector: 'app-request-page',
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.css'],
})
export class RequestPageComponent implements OnInit {
  /**** functions help to diplay data */
  deleteSign: boolean = false;
  uploadedFileStatus: boolean = false;
  leaveRequestsConclusionData:any=
    {
      code:'',
      name:'',
      jobTitle:'',
      salaryProfile:'',
      leavingDate:'',
      ReJoiningDate:'',
      ActualLeavingDate:'',
      leaveType:'',
      requestStatus:'',
      profileImg:''
    }
  ;
  uploadedFilesName: any;
  searchInp: string = '';
  employeesList = this.requestData.employees;
  searchResult: any = [];
  choosenEmployee: any = {
    code: '',
    name: '',
    jobTitle: '',
    salaryProfile: '',
    joiningDate: '',
    location: [{ country: '', city: '', area: '' }],
    leaveRequests: [],
  };
  choosenEmployeeAlert:boolean=false;

  writingTosearch(e: any) {
    this.deleteSign = true;
    this.searchResult = [];
    for (let i = 0; i < this.employeesList.length; i++) {
      if (
        this.employeesList[i].code.startsWith(e.target.value) ||
        this.employeesList[i].name.startsWith(e.target.value) ||
        this.employeesList[i].jobTitle.startsWith(e.target.value)
      ) {
        this.searchResult.push(this.employeesList[i]);
      }
    }
    if (!this.searchInp) {
      this.searchResult = [];
      this.deleteSign = false;
    }
  }
  chooseThisEmployee(e: any) {
    this.choosenEmployee = e;
    this.choosenEmployeeAlert=true;
    this.deleteSign = false;
    this.searchInp = '';


  }
  fileUploaded(e: any) {
    this.uploadedFilesName = e.target.files;
    this.uploadedFileStatus = true;
  }
  clearSearchInp() {
    this.searchInp = '';
    this.deleteSign = false;
  }
  /**************************** */

  leaveRequestForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private requestData: RequestDataService
  ) {
    this.leaveRequestForm = formBuilder.group({
      LeavetoAvail: ['local', Validators.required],
      RequireLeaveSalaryAdvance: ['no', Validators.required],
      LeavingDate: ['', Validators.required],
      RejoiningDate: ['', Validators.required],
      leaveType: ['', Validators.required],
      noOfDays: ['', Validators.required],
      Guaranter: ['', Validators.required],
      Replacment: ['', Validators.required],
      address: ['', Validators.required],
      contactNo: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      Remarks: ['', Validators.required],
      formFileUpload: ['', Validators.required],
      EmployeeInfo: formBuilder.group({}),
    });

    /************************ */
    /**** to creat and set data in the local storage **** */

  this.requestData.getFromLocalStorage();

  }

  onSubmitLeaveRequest() {
    this.sendLeaveRequest();
    this.getleavesConclosion()
    this.router.navigate(['/leavesBoard']);

  }
  sendLeaveRequest() {
    if(this.choosenEmployee.code){
      for (let i = 0; i < this.requestData.employees.length; i++) {
        if (
          this.requestData.employees[i].code == this.choosenEmployee.code &&
          this.requestData.employees[i].name == this.choosenEmployee.name
        ) {
          this.requestData.employees[i].leaveRequests.push(
            this.leaveRequestForm.value
          );

        }
      }
      /**** here after i pushed data to service , i set this services again at localStorage*** */
      this.requestData.saveInlocalStorage()

    }
    else
    {
      window.alert("please choose an employee to give leave request");

    }
  }

  getleavesConclosion(){
  this.leaveRequestsConclusionData.code = this.choosenEmployee.code
  this.leaveRequestsConclusionData.name = this.choosenEmployee.name
  this.leaveRequestsConclusionData.jobTitle = this.choosenEmployee.jobTitle
  this.leaveRequestsConclusionData.salaryProfile = this.choosenEmployee.salaryProfile
  this.leaveRequestsConclusionData.leavingDate = this.leaveRequestForm.value.LeavingDate
  this.leaveRequestsConclusionData.ReJoiningDate = this.leaveRequestForm.value.RejoiningDate
  this.leaveRequestsConclusionData.ActualLeavingDate = this.leaveRequestForm.value.LeavingDate
  this.leaveRequestsConclusionData.leaveType = this.leaveRequestForm.value.leaveType
  this.requestData.leaveRequestsConclusion.push(this.leaveRequestsConclusionData);
  this.requestData.saveconclosionFromLocalStorage()


  }

  ngOnInit(): void {


  }
}

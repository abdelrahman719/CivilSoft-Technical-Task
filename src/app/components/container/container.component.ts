import { Component, OnInit  } from '@angular/core';
import { GridPageComponent } from '../grid-page/grid-page.component';
import { RequestPageComponent } from '../request-page/request-page.component';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {


title!:string;
notification!:string
displayFlag:boolean=false
  constructor() {}

  runEmitChanges(e:any){
    if(e instanceof GridPageComponent)
    {
      this.title="Manage Leave Requests"
      this.notification="You Have No. X of Notification(s)"
      this.displayFlag=false

    }
    if(e instanceof RequestPageComponent)
    {
      this.title="Post Leave Request"
      this.notification=' Request No.';
      this.displayFlag=true


    }


  }

  ngOnInit(): void {

  }


}

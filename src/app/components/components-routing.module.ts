import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { GridPageComponent } from './grid-page/grid-page.component';
import { RequestPageComponent } from './request-page/request-page.component';

const routes: Routes = [
  {path:"",component:ContainerComponent, children:[{
    path:"",component:RequestPageComponent
  },
  {
    path:"leavesBoard",component:GridPageComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }

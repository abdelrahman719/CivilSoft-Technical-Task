import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { RequestPageComponent } from './request-page/request-page.component';
import { GridPageComponent } from './grid-page/grid-page.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterUserPipe } from '../shared/pipes/filter-user.pipe';



@NgModule({
  declarations: [
    RequestPageComponent,
    GridPageComponent,
    NavbarComponent,
    ContainerComponent,
    FilterUserPipe


  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,


  ]


})
export class ComponentsModule { }

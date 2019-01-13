import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ColorsTableComponent } from './colors-table/colors-table.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ColorsTableComponent }
];

@NgModule({
  declarations: [ ColorsTableComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class HomePageModule { }

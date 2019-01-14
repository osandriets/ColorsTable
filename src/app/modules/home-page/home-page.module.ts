import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ColorsTableComponent } from './colors-table/colors-table.component';
import { Routes, RouterModule } from '@angular/router';
import { AddDialogComponent } from './dialog/add-dialog/add-dialog.component';

const routes: Routes = [
  { path: '', component: ColorsTableComponent }
];

@NgModule({
  declarations: [ ColorsTableComponent, AddDialogComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: [
    AddDialogComponent
  ],
})
export class HomePageModule { }

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { DataService } from '../../../servises/data.service';
import { AddDialogComponent } from '../dialog/add-dialog/add-dialog.component';
import { ColorElement } from '../../../model/ColorElement';

@Component({
  selector: 'app-colors-table',
  templateUrl: './colors-table.component.html',
  styleUrls: ['./colors-table.component.scss']
})
export class ColorsTableComponent implements OnInit {

  displayedColumns: string[] = ['colorName', 'hexValue', 'actions'];
  dataSource: MatTableDataSource<ColorElement>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dataService: DataService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.dataService.getColors()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data['colorsArray']);
        this.dataSource.sort = this.sort;
      });
  }

  addNew(issue: ColorElement): void {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '400px',
      data: {issue: issue }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  startEdit(element) {
    console.log('edit element: ', element);
  }

  deleteItem(element) {
    console.log('delete element: ', element);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { DataService } from '../../../servises/data.service';

export interface ColorElement {
  colorName: string;
  hexValue: string;
}

@Component({
  selector: 'app-colors-table',
  templateUrl: './colors-table.component.html',
  styleUrls: ['./colors-table.component.scss']
})
export class ColorsTableComponent implements OnInit {

  displayedColumns: string[] = ['colorName', 'hexValue'];
  dataSource: MatTableDataSource<ColorElement>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(public dataService: DataService ) {
  }

  ngOnInit() {
    this.dataService.getColors()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data['colorsArray']);
        this.dataSource.sort = this.sort;
      });
  }
}

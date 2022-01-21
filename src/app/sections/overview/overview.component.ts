import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  public expenseControl = new FormControl();
  public expenseoptions: string[] = ['One', 'Two', 'Three'];
  public expenseFilteredOptions: Observable<string[]>;

  public taskControl = new FormControl();
  public taskoptions: string[] = ['One', 'Two', 'Three'];
  public taskFilteredOptions: Observable<string[]>;

  constructor() {
    this.expenseFilteredOptions = this.expenseControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value,this.expenseoptions)),
    );
    this.taskFilteredOptions = this.taskControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value,this.taskoptions)),
    );
   }

  ngOnInit(): void {
    this.expenseFilteredOptions = this.expenseControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value,this.expenseoptions)),
    );
    this.taskFilteredOptions = this.taskControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value,this.taskoptions)),
    );
  }
  private _filter(value: string, options : string[]): string[] {
    const filterValue = value.toLowerCase();

    return options.filter(option => option.toLowerCase().includes(filterValue));
  }

}

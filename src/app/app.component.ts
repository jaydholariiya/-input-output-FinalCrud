import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataComponent } from './data/data.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    DataComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AppComponent {
  // UpdatedData: FormGroup;

  DataPassList: any = [];
  constructor(private fb: FormBuilder) {}

  dataStore: any;

  dataToBeUpdated: any = {};
  dataInUpdate: boolean = false;

  updateItem(updateData: any) {
    this.dataInUpdate = true;
    this.dataToBeUpdated = updateData;
    console.warn(this.dataToBeUpdated, 'dataUpdated');
    console.log(updateData);
    console.warn(updateData.name);
  }

  dataUpdatingFunction(data: any) {
    console.log(data);
    this.DataPassList = this.DataPassList.map((item: any) => {
      if (item.Id === data.Id) {
        return {
          Id: item.Id,
          ...data,
        };
      } else {
        return item;
      }
    });
  }
}

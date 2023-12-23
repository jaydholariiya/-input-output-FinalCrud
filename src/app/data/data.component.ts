import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css',
})
export class DataComponent {
  formSchema: FormGroup;
  formSchema_update: FormGroup;
  @Input() itemList: any[] = [];
  @Input() dataToBeUpdate: any;
  @Input() inUpdate: boolean = false;
  @Output() updateClicked: EventEmitter<any> = new EventEmitter();
  @Output() updateThisData: EventEmitter<any> = new EventEmitter();
  isUpdate: any = false;
  inUpdateFromExternalAction: any = false;
  constructor(private fb: FormBuilder) {
    this.formSchema = this.fb.group({
      Id: ['', Validators.required],
      name: ['', Validators.required],
      Gender: ['', Validators.required],
      Mobile: ['', Validators.required],
      Age: ['', Validators.required],
    });
    this.formSchema_update = this.fb.group({
      name: ['', Validators.required],
      Gender: ['', Validators.required],
      Mobile: ['', Validators.required],
      Age: ['', Validators.required],
    });
  }
  dataAdd() {
    this.itemList.push(this.formSchema.value);
    console.warn(this.itemList);
    this.formSchema.reset();
  }
  updateItem(data: any) {
    this.updateClicked.emit(data);
    this.inUpdate = true;
  }
  updateDataFromChild() {
    this.updateThisData.emit({
      Id: this.dataToBeUpdate.Id,
      ...this.formSchema_update.value,
    });
  }
  buttonAdd() {
    this.inUpdate = false;
  }
  deleteItem(id: any) {
    console.warn(id);
    this.itemList = this.itemList.filter((data: any) => data.Id !== id);
  }
}

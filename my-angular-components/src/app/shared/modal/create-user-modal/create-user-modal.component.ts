import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-user-modal',
  templateUrl: './create-user-modal.component.html',
  styleUrls: ['./create-user-modal.component.scss']
})
export class CreateUserModalComponent implements OnInit {

  // Validation du form
  createUserForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateUserModalComponent>,
    public fb: FormBuilder,
  ) {
    // Pour la Validation
    this.createUserForm = this.fb.group({
      firstNameControl: new FormControl('',  [Validators.required, ]),
    });
  }

  ngOnInit() {

  }

  submitCreateOfForm(createUserFormValue: any) {

    const result = {
      firstName : createUserFormValue.firstNameControl
    };

    return result;
  }

  handleClickValidate() {
    this.dialogRef.close(this.submitCreateOfForm(this.createUserForm.value));
  }

  handleClickCancel() {
    this.dialogRef.close(null);
  }

}

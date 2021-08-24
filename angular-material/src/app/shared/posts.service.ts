import { Injectable } from '@angular/core';
import { FormGroup, FormControl , Validator, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    dob: new FormControl(''),
    isPermanent: new FormControl(false)
  });

  initializeFormGroup(){
    this.form.setValue({
      $key: null,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: '1',
    department: 0,
    dob: '',
    isPermanent: false

    });
  }

}
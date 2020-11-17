import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/app/core/Models/user.model';
import { UserService } from 'src/app/core/Services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-acc',
  templateUrl: './register-acc.component.html',
  styleUrls: ['./register-acc.component.css']
})
export class RegisterAccComponent implements OnInit {
  registerForm: FormGroup;
  id: number = null;
  firstName: string = '';
  lastName: string = '';
  DoB: Date = null;
  userName: string = '';
  passWord: string = '';
  email: string = '';
  phoneNumber: string = '';
  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      'id': [null, Validators.required],
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'DoB': [null, Validators.required],
      'userName': [null, Validators.required],
      'passWord': [null, Validators.required],
      'email': [null, Validators.required],
      'phoneNumber': [null, Validators.required],
    })
  }

  onFormSubmit(form: NgForm) {
    this.userService.register(form)
      .subscribe(res => {
        alert("dang ky thanh cong")
      });

  }

}

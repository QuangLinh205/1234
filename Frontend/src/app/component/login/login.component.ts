import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Login } from 'src/app/core/Models/login.model';
import { UserService } from 'src/app/core/Services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
LoginForm: FormGroup;
id:number = null;
passWord:string = '';
  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      'id': [null, Validators.required],
      'passWord': [null, Validators.required]
    })
  }
ssxsxscevev
  onFormSubmit(form: NgForm) {
     this.userService.login(form)
      .subscribe((res:any) => {
        console.log(res);
        if(res == 1){
          this.router.navigateByUrl('/weight');
        }
        else{
          alert("error")
          this.router.navigateByUrl('/login');
        }
             
      });
  }
}

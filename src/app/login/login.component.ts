import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../core/services/auth.service';
import { CustomValidators } from '../custom-validators/custom-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup;
  subscribtion!: Subscription;

  constructor(private fb: FormBuilder, 
  private authService: AuthService, 
  private router: Router) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      email: ['',Validators.required], 
      password:['',

      {

        validators: [

          Validators.compose([

            Validators.required,
            CustomValidators.passwordStrength()

          ])

        ],

        updateOn: 'blur'

      }]
    })

    this.subscribtion = this.myForm.controls['email'].valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  get email(){
    return this.myForm.get('email');
  }

  get password() {

    return this.myForm.get('password');

  }

  // login() {
  //   console.log(this.myForm.value);
  //   const email = this.myForm.get('email')?.value;
  //   const password = this.myForm.get('password')?.value;
  //   this.authService.login(email, password).subscribe({
  //     next: (response: any) => {
  //       console.log(response.token);
  //       this.saveInLocalStorage(response.token);
  //       this.router.navigate([''])
  //     },
  //     error: console.error,
  //   });
  // }
  
  login(){
    console.log('login')
    window.localStorage.setItem("token", "value")
  }

  logout(){
    localStorage.removeItem("token");
  }

  // saveInLocalStorage(token: string) {
  //   window.localStorage.setItem('token', token);
  // }

  // ngOnDestroy(): void {
  //   this.subscribtion.unsubscribe();
  // }
}

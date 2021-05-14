import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) { 
    if(this.authService.currentUserValue) {
      this.router.navigate(['orders']);
    }
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  get fields() {
    return this.loginForm.controls;
  }

  public onSubmit() {
    this.authService.login(this.fields.username.value, this.fields.password.value)
    .pipe(first())
    .subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(["orders"]);
      }, (err) => {
        alert("Identifiant incorrect");
      }
    )
  }

}

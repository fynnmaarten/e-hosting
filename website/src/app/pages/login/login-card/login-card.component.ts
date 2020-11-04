import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthenticationService } from '@app/services/authentication.service';
import { AuthenticationRequest } from '@app/models/Authentication';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {

  @Input() public title : string;
  @Input() public inputLabel1 : string;
  @Input() public inputLabel2 : string;

  public error = 'Email oder Passwort ist falsch!';
  public showError = false;
  public loginForm : FormGroup;

  constructor(private readonly authenticationService : AuthenticationService,
              private readonly formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    
  }

  onSubmit(){
    console.log("submit");
    if(this.loginForm.invalid){
      this.error = "Email oder Passwort ist falsch!"
      this.showError = true;
      return;
    }
    this.showError = false;

    this.authenticationService.login({email : "123", password: ""})
    .subscribe(
      data => {
        console.log("login")
      },
      error => {
        console.log(error);
        this.error = error.statusText; //Email oder Passwort ist falsch!
        this.showError = true;
      } 
    )
  }

  onCloseErrorBox(){
    this.showError = false;
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginComponent>, private loginService:LoginService) { }
  
  loginForm = new FormGroup({
    email: new FormControl('', [ Validators.required, Validators.email ]),
    pass: new FormControl('', [ Validators.required ])
  })
  
  ngOnInit(): void {
    
  }
  login() {
    var login = this.loginService.login(this.loginForm.value);
    if (login == true) this.onNoClick(); else Swal.fire('','Correo o clave incorrecto','error');
  }
  //close login dialog
  onNoClick(): void {
    this.dialogRef.close();
  }
  public get email(){return this.loginForm.get('email')}
  public get pass(){return this.loginForm.get('pass')}
}

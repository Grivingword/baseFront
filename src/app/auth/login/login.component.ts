import { Component, OnInit } from '@angular/core';
import { AuthService} from "../../_core/services/auth.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  fromLogin: FormGroup;
  submitted = false;
  disableButton: boolean;
  load: boolean;

  constructor(
    private title: Title,
    private formBuilder: FormBuilder,
    private router: Router,
    public loginService: AuthService,
  ) { }

  ngOnInit(): void {
    this.fromLogin = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
    this.title.setTitle('baseProject - Login');
  }

  get form() {return this.fromLogin.controls; }

  onLogin(): void {
    this.submitted = true;
    this.disableButton = true;
    this.load = true;
    const params = {
      email: this.form.email.value,
      password: this.form.password.value,
    };

    this.loginService.login(params).subscribe((res) => {
      if (res) {
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('userData', JSON.stringify(res.userData));
        this.router.navigate(['/panel']).then();
      } else {
      }
    });
  }

}

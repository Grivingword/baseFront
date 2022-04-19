import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from "../_core/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  userData: any;

  constructor(
    public loginService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.userData = JSON.parse(sessionStorage.getItem('userData'));
  }

  exitToApp() {
    const params = {
      token: this.loginService.getToken()
    }
    this.loginService.logout(params).subscribe((res) => {
      if (res.status) {
        this.loginService.cleanStorage();
        this.router.navigate(['/']).then();
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/login/services/authentication.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public currentUser: User = new User();
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.authService.currentUser$.subscribe(
      (user) => {
        this.currentUser = user;
      }
    )
  }

  ngOnInit(): void {
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}

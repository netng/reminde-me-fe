import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/auths/models/user.interface';
import { AuthService } from '../shared/auths/services/auth/auth.service';
import { AppService } from '../shared/services/app.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User = {} as User;
  userId!: number;

  constructor(
    private appService: AppService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    console.log(this.userId);
  }

  getUserDetails() {
    this.userId = this.authService.getDecodedToken().sub;
    this.appService.getUserDetails(this.userId)
      .subscribe({
        next: (data) => {
          this.user = data.data;
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  onLogout() {
    this.authService.doLogout();
  }

}

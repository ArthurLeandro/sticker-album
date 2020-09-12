import { Component } from '@angular/core';

import { AuthService } from './services';
import { User } from './models';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
    user: User;

    constructor(private authService: AuthService) {
        this.authService.user.subscribe(x => this.user = x);
    }

    logout(): void {
        this.authService.logout();
    }
}

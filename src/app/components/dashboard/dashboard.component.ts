import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  user = 'asugich@ASG.com';

  constructor(private router: Router, private databaseSrv: DatabaseService) {}

  logout() {
    this.router.navigate(['/login']);
  }
}

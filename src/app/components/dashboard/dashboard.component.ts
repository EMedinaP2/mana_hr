import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService, Puestos } from 'src/app/services/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user = 'asugich@ASG.com';
  puestos: Puestos[] = [];

  constructor(private router: Router, private databaseSrv: DatabaseService) {}

  ngOnInit() {
    this.puestos = this.databaseSrv.getPuestos();
    console.log('Puestos: ', this.puestos);
  }

  logout() {
    this.router.navigate(['/login']);
  }

  goToAddPosition(){
    this.router.navigate(['/add-position']);
  }
}

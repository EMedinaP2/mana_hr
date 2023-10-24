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
  table: any = [];

  rojo = 0;
  naranja = 0;
  verde = 0;

  constructor(private router: Router, private databaseSrv: DatabaseService) {}

  ngOnInit() {
    // this.puestos = this.databaseSrv.getPuestos();
    // console.log('Puestos: ', this.puestos);

    this.table = this.databaseSrv.getTable();
    
    console.log('table: ', this.databaseSrv.getTable());
  }

  logout() {
    this.router.navigate(['/login']);
  }

  goToAddPosition() {
    this.router.navigate(['/add-position']);
  }
}

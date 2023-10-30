import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { PuestoService } from 'src/app/services/puesto.service';
import { DatabaseService, Puestos } from 'src/app/services/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user = '';
  puestos: Puestos[] = [];
  table: any = [];
  subTable: any = [];
  modal = false;
  job_title = '';

  constructor(
    private router: Router,
    private puestoSrv: PuestoService,
    private databaseSrv: DatabaseService
  ) {}

  ngOnInit() {
    this.user = this.getCookieUser('user')!;

    this.puestoSrv.getPositions().subscribe({
      next: (x) => {
        (this.puestos = x), console.log('this.puestos[]: ', this.puestos), this.makeTable();
      },
      error: (err) => console.log('An error ocurred ', err),
    });
  }

  getCookieUser(user: string) {
    // this.user = document.cookie.match('user');

    const nameLenPlus = user.length + 1;
    return (
      document.cookie
        .split(';')
        .map((c) => c.trim())
        .filter((cookie) => {
          return cookie.substring(0, nameLenPlus) === `${user}=`;
        })
        .map((cookie) => {
          return decodeURIComponent(cookie.substring(nameLenPlus));
        })[0] || null
    );
  }

  logout() {
    document.cookie = `user = `;
    document.cookie = `password = `;
    this.router.navigate(['/login']);
  }

  goToAddPosition() {
    this.router.navigate(['/add-position']);
  }

  makeTable() {
    let initial_table: any = [];

    this.puestos.forEach((puesto) => {
      let underpaid_const = 1;
      let normalpaid_const = 1;
      let overpaid_const = 1;

      let old_puesto = initial_table.find((element: any) => {
        return element.job_title == puesto.job_title;
      });
      // Ya existe el puesto en el arreglo
      if (old_puesto) {
        old_puesto.number++;

        if (puesto.salary_for_position > puesto.salary_r_max) {
          old_puesto.salary_level.overpaid += overpaid_const;
        } else if (puesto.salary_for_position < puesto.salary_r_min) {
          old_puesto.salary_level.underpaid += underpaid_const;
        } else {
          old_puesto.salary_level.normal += normalpaid_const;
        }
      } else {
        // No existe el puesto en el arreglo
        let salary_level = {};
        let jobs: any = [];

        if (puesto.salary_for_position > puesto.salary_r_max) {
          salary_level = { underpaid: 0, normal: 0, overpaid: 1 };
        } else if (puesto.salary_for_position < puesto.salary_r_min) {
          salary_level = { underpaid: 1, normal: 0, overpaid: 0 };
        } else {
          salary_level = { underpaid: 0, normal: 1, overpaid: 0 };
        }

        this.puestos.forEach((element) => {
          if (element.job_title == puesto.job_title) {
            jobs.push(element);
          }
        });

        initial_table.push({
          job_title: puesto.job_title,
          number: 1,
          jobs: jobs,
          salary_level: salary_level,
        });
      }
    });
    console.log("initial_table: ", initial_table)
    this.table = initial_table;
    this.setGraphs();
  }

  setGraphs() {
    setTimeout(() => {
      this.table.forEach((element: any, index: any) => {
        let red_f = 0;
        if (element.salary_level.underpaid === 0) {
          red_f = 0;
        } else {
          red_f = (element.salary_level.underpaid * 100) / element.number;
        }

        let orange_f = 0;
        if (element.salary_level.normal === 0) {
          orange_f = 0;
        } else {
          orange_f = (element.salary_level.normal * 100) / element.number;
        }

        let graph = document.getElementById(`graph${index}`);
        if (graph != null) {
          graph.style.background = `linear-gradient(to right, red 0% ${red_f}%, orange ${red_f}% ${
            red_f + orange_f
          }%, green ${red_f + orange_f}%)`;
        }
      });
    }, 0);
  }

  makeSubTable(job_title: any) {
    this.subTable = [];
    this.table.forEach((element: any) => {
      if (job_title == element.job_title) {
        this.subTable = element.jobs;
        console.log(this.subTable);
      }
    });
    this.job_title = job_title;
    this.showModal();
  }

  showModal() {
    if (this.modal) {
      this.modal = false;
    } else {
      this.modal = true;
    }
  }
}

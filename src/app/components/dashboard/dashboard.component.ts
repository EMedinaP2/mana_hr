import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
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

  constructor(private router: Router, private databaseSrv: DatabaseService) {}

  ngOnInit() {
    this.table = this.databaseSrv.getTable();

    console.log('table: ', this.databaseSrv.getTable());

    this.user = this.getCookieUser('user')!;

    this.setGraphs();
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
  // insertSubTable(job_title: any) {
  //   console.log('insertSubTable: ', job_title);
  //   var table: HTMLTableElement = <HTMLTableElement>(
  //     document.getElementById('table1')
  //   );

  //   let template = `<tr class="valores_tabla">
  //                     <td> ${job_title} </td>
  //                   <tr>`;
  //   table.innerHTML += template;
  // }
}

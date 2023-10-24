import { Injectable } from '@angular/core';

@Injectable()
export class DatabaseService {
  constructor() {}

  private puestos: Puestos[] = [
    {
      code: '1234567890',
      status: true,
      start: '19/05/2023',
      type: 'regular position',
      change_reason: 'upgrade',
      job_code: 'technician',
      job_title: 'maintenance',
      position: 'leader',
      FTE: '1',
      to_be_hired: 'yes',
      compnay: 'ASG',
      pay_range: '1500',
      pay_grade: '3000',
      salary_r_min: '1500',
      salary_r_mid: '2250',
      salary_r_max: '3500',
      bonus: '1000',
    },
    {
      code: '0987654321',
      status: true,
      start: '12/10/2022',
      type: 'regular position',
      change_reason: 'upgrade',
      job_code: 'engineer',
      job_title: 'developer',
      position: 'jr',
      FTE: '1',
      to_be_hired: 'yes',
      compnay: 'Google',
      pay_range: '2000',
      pay_grade: '4000',
      salary_r_min: '2000',
      salary_r_mid: '3000',
      salary_r_max: '4000',
      bonus: '2000',
    },
    {
      code: '1234598760',
      status: true,
      start: '05/08/2021',
      type: 'regular position',
      change_reason: 'hired',
      job_code: 'cleanning',
      job_title: 'cleanning',
      position: 'employee',
      FTE: '1',
      to_be_hired: 'yes',
      compnay: 'White Spaces',
      pay_range: '1000',
      pay_grade: '2000',
      salary_r_min: '1000',
      salary_r_mid: '1500',
      salary_r_max: '2000',
      bonus: '500',
    },
    {
      code: '0123456988',
      status: true,
      start: '05/08/2021',
      type: 'regular position',
      change_reason: 'hired',
      job_code: 'MKT',
      job_title: 'marketing',
      position: 'employee',
      FTE: '1',
      to_be_hired: 'yes',
      compnay: 'White Spaces',
      pay_range: '1000',
      pay_grade: '2000',
      salary_r_min: '1000',
      salary_r_mid: '1500',
      salary_r_max: '2000',
      bonus: '500',
    },
    {
      code: '1234568740',
      status: true,
      start: '30/12/2023',
      type: 'regular position',
      change_reason: 'hired',
      job_code: 'HR',
      job_title: 'human resources',
      position: 'employee',
      FTE: '1',
      to_be_hired: 'yes',
      compnay: 'Merlin',
      pay_range: '1000',
      pay_grade: '2000',
      salary_r_min: '1000',
      salary_r_mid: '1500',
      salary_r_max: '2000',
      bonus: '500',
    },
    {
      code: '1234598760',
      status: true,
      start: '05/08/2021',
      type: 'regular position',
      change_reason: 'hired',
      job_code: 'cleanning',
      job_title: 'developer',
      position: 'cleanner',
      FTE: '1',
      to_be_hired: 'yes',
      compnay: 'White Spaces',
      pay_range: '1000',
      pay_grade: '2000',
      salary_r_min: '1000',
      salary_r_mid: '1500',
      salary_r_max: '2000',
      bonus: '500',
    },
  ];

  getPuestos() {
    return this.puestos;
  }
  
  addPositon(){
  }

  getTable(){
    let table: any = [];
    this.puestos.forEach((element) => {
      table.append({"job_title": element.job_title, "number": 1, "salaries": element})
    })
    
    return table
  }
  
}

export interface Puestos {
  code: string;
  status: boolean;
  start: string;
  type: string;
  change_reason: string;
  job_code: string;
  job_title: string;
  position: string;
  FTE: string;
  to_be_hired: string;
  compnay: string;
  pay_range: string;
  pay_grade: string;
  // salary: string;
  salary_r_min: string;
  salary_r_mid: string;
  salary_r_max: string;
  bonus: string;
}

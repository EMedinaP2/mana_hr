import { Injectable } from '@angular/core';

@Injectable()
export class DatabaseService {
  constructor() {}

  public puestos: Puestos[] = [
    {
      code: '1234567890',
      status: true,
      start: '19/05/2023',
      type: 'regular position',
      change_reason: 'upgrade',
      job_code: 'technician',
      job_title: 'maintenance',
      position: 'leader',
      FTE: 2,
      to_be_hired: false,
      company: 'ASG',
      pay_range: 'PL_9',
      pay_grade: 'PL_9',
      salary_for_position: 1350,
      salary_r_min: 1500,
      salary_r_mid: 2250,
      salary_r_max: 3500,
      bonus: 'Monthly Local',
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
      FTE: 1,
      to_be_hired: false,
      company: 'Google',
      salary_for_position: 3500,
      pay_range: 'PL_11',
      pay_grade: 'PL_11',
      salary_r_min: 2000,
      salary_r_mid: 3000,
      salary_r_max: 4000,
      bonus: 'Monthly Local',
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
      FTE: 1,
      to_be_hired: true,
      company: 'White Spaces',
      pay_range: 'PL_8',
      pay_grade: 'PL_8',
      salary_for_position: 2300,
      salary_r_min: 1000,
      salary_r_mid: 1500,
      salary_r_max: 2000,
      bonus: 'Weekly Locla',
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
      FTE: 2,
      to_be_hired: false,
      company: 'White Spaces',
      pay_range: 'PL_9',
      pay_grade: 'PL_9',
      salary_for_position: 1600,
      salary_r_min: 1000,
      salary_r_mid: 1500,
      salary_r_max: 2000,
      bonus: 'Monthly Local',
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
      FTE: 2,
      to_be_hired: false,
      company: 'Merlin',
      pay_range: 'PL_8',
      pay_grade: 'PL_8',
      salary_for_position: 1600,
      salary_r_min: 1000,
      salary_r_mid: 1500,
      salary_r_max: 2000,
      bonus: 'Weekly Local',
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
      FTE: 1,
      to_be_hired: false,
      company: 'White Spaces',
      pay_range: 'PL_10',
      pay_grade: 'PL_10',
      salary_for_position: 1200,
      salary_r_min: 1000,
      salary_r_mid: 1500,
      salary_r_max: 2000,
      bonus: 'Weekly Local',
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
  FTE: number;
  to_be_hired: boolean;
  company: string;
  pay_range: string;
  pay_grade: string;
  salary_for_position: number;
  salary_r_min: number;
  salary_r_mid: number;
  salary_r_max: number;
  bonus: string;
}

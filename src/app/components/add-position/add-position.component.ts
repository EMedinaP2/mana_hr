import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Puestos, DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.css']
})
export class AddPositionComponent {

  formPuesto: FormGroup;
  puestos: Puestos[] = []

  ngOnInit() {
    this.puestos = this.databaseService.getPuestos();
  }
  constructor(private router: Router,
    private fb: FormBuilder,
    private databaseService: DatabaseService) {
    this.formPuesto = this.fb.group({
      code: ['', [Validators.required]],
      status: ['', [Validators.required]],
      start: ['', [Validators.required]],
      type: ['', [Validators.required]],
      change_reason: ['', [Validators.required]],
      job_code: ['', [Validators.required]],
      job_title: ['', [Validators.required]],
      position: ['', [Validators.required]],
      FTE: ['', [Validators.required]],
      to_be_hired: ['', [Validators.required]],
      company: ['', [Validators.required]],
      pay_range: ['', [Validators.required]],
      pay_grade: ['', [Validators.required]],
      salary_for_position: ['', [Validators.required]],
      extras: ['', [Validators.required]],
      total: ['', [Validators.required]],
      salary_r_min: ['', [Validators.required]],
      salary_r_mid: ['', [Validators.required]],
      salary_r_max: ['', [Validators.required]],
      bonus: ['', [Validators.required]]
    });
  }

  get invalidCode() {
    return (
      this.formPuesto!.get('code')!.invalid &&
      this.formPuesto!.get('code')!.touched
    );
  }
  get invalidStatus() {
    return (
      this.formPuesto!.get('status')!.invalid &&
      this.formPuesto!.get('status')!.touched
    );
  }

  get invalidStart() {
    return (
      this.formPuesto!.get('start')!.invalid &&
      this.formPuesto!.get('start')!.touched
    );
  }

  get invalidType() {
    return (
      this.formPuesto!.get('type')!.invalid &&
      this.formPuesto!.get('type')!.touched
    );
  }

  get invalidChangeReason() {
    return (
      this.formPuesto!.get('change_reason')!.invalid &&
      this.formPuesto!.get('change_reason')!.touched
    );
  }

  get invalidJobCode() {
    return (
      this.formPuesto!.get('job_code')!.invalid &&
      this.formPuesto!.get('job_code')!.touched
    );
  }

  get invalidJobTittle() {
    return (
      this.formPuesto!.get('job_title')!.invalid &&
      this.formPuesto!.get('job_title')!.touched
    );
  }
  
  get invalidPosition() {
    return (
      this.formPuesto!.get('position')!.invalid &&
      this.formPuesto!.get('position')!.touched
    );
  }


  get invalidFTE() {
    return (
      this.formPuesto!.get('FTE')!.invalid &&
      this.formPuesto!.get('FTE')!.touched
    );
  }

  get invalidToBeHired() {
    return (
      this.formPuesto!.get('to_be_hired')!.invalid &&
      this.formPuesto!.get('to_be_hired')!.touched
    );
  }

  get invalidCompany() {
    return (
      this.formPuesto!.get('company')!.invalid &&
      this.formPuesto!.get('company')!.touched
    );
  }

  get invalidPayRange() {
    return (
      this.formPuesto!.get('pay_range')!.invalid &&
      this.formPuesto!.get('pay_range')!.touched
    );
  }

  get invalidPayGrade() {
    return (
      this.formPuesto!.get('pay_grade')!.invalid &&
      this.formPuesto!.get('pay_grade')!.touched
    );
  }

  get invalidSalary() {
    return (
      this.formPuesto!.get('salary_for_position')!.invalid &&
      this.formPuesto!.get('salary_for_position')!.touched
    );
  }

  get invalidSalaryMin() {
    return (
      this.formPuesto!.get('salary_r_min')!.invalid &&
      this.formPuesto!.get('salary_r_min')!.touched
    );
  }

  get invalidSalaryMid() {
    return (
      this.formPuesto!.get('salary_r_mid')!.invalid &&
      this.formPuesto!.get('salary_r_mid')!.touched
    );
  }

  get invalidSalaryMax() {
    return (
      this.formPuesto!.get('salary_r_max')!.invalid &&
      this.formPuesto!.get('salary_r_max')!.touched
    );
  }

  get invalidBonus() {
    return (
      this.formPuesto!.get('bonus')!.invalid &&
      this.formPuesto!.get('bonus')!.touched
    );
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  addPosition() {
    if (this.formPuesto.invalid) {
      return Object.values(this.formPuesto.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
    let nuevoPuesto: Puestos = {
      code: this.formPuesto.value.code,
      status: this.formPuesto.value.status,
      start: this.formPuesto.value.start,
      type: this.formPuesto.value.type,
      change_reason: this.formPuesto.value.change_reason,
      job_code: this.formPuesto.value.job_code,
      job_title: this.formPuesto.value.job_title,
      position: this.formPuesto.value.position,
      FTE: this.formPuesto.value.FTE,
      to_be_hired: this.formPuesto.value.to_be_hired,
      company: this.formPuesto.value.company,
      pay_range: this.formPuesto.value.pay_range,
      pay_grade: this.formPuesto.value.pay_grade,
      salary_for_position: this.formPuesto.value.salary_for_position,
      extras: this.formPuesto.value.extras,
      total: this.formPuesto.value.total,
      salary_r_min: this.formPuesto.value.salary_r_min,
      salary_r_mid: this.formPuesto.value.salary_r_mid,
      salary_r_max: this.formPuesto.value.salary_r_max,
      bonus: this.formPuesto.value.bonus,
      compare_to_market: this.formPuesto.value.compare_to_market
    }
    this.puestos.push(nuevoPuesto)
    console.log(this.databaseService.getPuestos())
    this.goBack()
  }
}

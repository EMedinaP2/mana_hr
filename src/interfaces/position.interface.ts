export default interface Puesto{
    id?:string;
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
    extras: number;
    total: number;
    salary_r_min: number;
    salary_r_mid: number;
    salary_r_max: number;
    bonus: any;
    benefits: any;
    compare_to_market: string;
  }
  
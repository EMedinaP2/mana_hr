import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.css']
})
export class AddPositionComponent {
  
  constructor(private router: Router) {
    
  }

  goBack(){
    this.router.navigate(['/dashboard']);
  }
}

// import { Component } from '@angular/core';
// import { ActionService } from '../services/action.service';
// import { Router } from '@angular/router';
// import { Action, Member } from '../models/action';

// @Component({
//   selector: 'app-action',
//   templateUrl: './action.component.html',
//   styleUrls: ['./action.component.scss']
// })
// export class ActionComponent {

//   name: string = '';
//   objective: string = '';
//   beneficiaries: number = 0;
//   responsible: string ='';
//   creationDate: Date= new Date();
//   status: string = '';

//   constructor(private actionService: ActionService,private router: Router) { }

//   // Function triggered when adding an action
//   // onAddAction(name: string, objective: string, beneficiaries: number, responsible: string, creationDate: Date): void {
//   //   this.actionService.addAction(name, objective, beneficiaries, responsible, creationDate );
//   // }


//   // onAddAction(name: string, objective: string, beneficiaries: number, responsible: string, creationDate: Date): void {
//   //   const responsibleMember = new Member(responsible, 30); // Example responsible member
//   //   this.actionService.addAction(name, objective, beneficiaries, responsibleMember, creationDate);
//   // }

//   onAddAction(name: string, objective: string, beneficiaries: number, responsible: string, creationDate: Date): void {
//     const responsibleMember = new Member(responsible, 30); // Example responsible member
//     const newAction = new Action(name, objective, beneficiaries, responsibleMember, creationDate);
//     this.actionService.addAction(newAction);
//   }
  
//     // Method to navigate back to the action list page
//     navigateToActionList() {
//       this.router.navigate(['/actions']); 
//     }

//   onSubmit(): void {
//     if (this.name && this.objective && this.beneficiaries > 0) {
//       this.actionService.addAction(this.name, this.objective, this.beneficiaries, this.responsible, this.creationDate);
//       this.name = '';
//       this.objective = '';
//       this.beneficiaries = 0;
//       this.responsible='';
//       this.status='';
//     } else {
//       // Handle form validation or show error messages
//       console.log('Please fill in all fields.');
//     }
//   }
// }



import { Component } from '@angular/core';
import { ActionService } from '../services/action.service';
import { Router } from '@angular/router';
import { Action, Member } from '../models/action';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent {

  name: string = '';
  objective: string = '';
  beneficiaries: number = 0;
  responsible: string ='';
  creationDate: Date = new Date();
  status: string = '';

  constructor(private actionService: ActionService, private router: Router) { }
  
  onAddAction(): void {
    if (this.name && this.objective && this.beneficiaries > 0) {
      const responsibleMember = new Member(this.responsible, 30);
      const newAction = new Action(this.name, this.objective, this.beneficiaries, responsibleMember, this.creationDate);
      this.actionService.addAction(newAction);
      // Reset form fields or handle redirection if needed
      this.navigateToActionList();
    } else {
      console.log('Please fill in all fields.');
    }
  }
  
  // Method to navigate back to the action list page
  navigateToActionList() {
    this.router.navigate(['/actions']); 
  }
}


import { Injectable } from '@angular/core';
import { Action, Member } from '../models/action';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
    private actions: Action[] = [
      { name: 'Action 1', beneficiaries: 10, isSuccess: false, objective: 'Objective 1', responsible:new Member('John Doe', 30), creationDate: new Date() },
      { name: 'Action 2', beneficiaries: 20, isSuccess: true, objective: 'Objective 2', responsible:new Member('Jane Smith', 25), creationDate: new Date()},
    ];

  constructor() { }

  getActions(): Action[] {
    return this.actions;
  }

  addAction(newAction: Action): void {
    this.actions.push(newAction);
  }

  
  deleteAction(index: number): void {
    this.actions.splice(index, 1 );
  }
}

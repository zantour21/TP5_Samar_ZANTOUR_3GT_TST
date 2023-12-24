import { Component, OnInit } from '@angular/core';
import { ActionService } from '../services/action.service';
import { Action } from '../models/action';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.scss']
})
export class ActionListComponent implements OnInit {
  actions: Action[] = [];

  constructor(private actionService: ActionService) { }

  ngOnInit(): void {
    this.loadActions();
  }

  loadActions(): void {
    this.actions = this.actionService.getActions();
  }

  markAsSuccess(action: Action): void {
    // Mark an action as successful
    action.isSuccess = true;
  }

  deleteAction(actionOrIndex: Action | number): void {
    if (typeof actionOrIndex === 'number') {
      // If the provided argument is a number (index), delete the action at that index
      this.actionService.deleteAction(actionOrIndex);
    } else {
      // If the provided argument is an Action, find its index and delete it
      const index = this.actions.indexOf(actionOrIndex);
      if (index !== -1) {
        this.actionService.deleteAction(index);
      }
    }
    this.loadActions(); // Update the list after deletion
  }
}

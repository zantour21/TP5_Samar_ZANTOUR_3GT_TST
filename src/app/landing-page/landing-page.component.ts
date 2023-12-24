import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionService } from '../services/action.service';
import { Action } from '../models/action';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  actions: Action[] = [];
  actionsVisible = false; // Control the visibility of actions

  constructor(private router: Router, private actionService: ActionService) { }

  loadActions(): void {
    // Fetch actions from the service
    this.actions = this.actionService.getActions();
    this.actionsVisible = true; // Set actions to be visible
  }


  // Function to navigate to the action list page
  navigateToActionList(): void {
    this.router.navigate(['/actions']);
  }
}

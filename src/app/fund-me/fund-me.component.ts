import { Component, OnInit, Input } from '@angular/core';
import { Contributor } from '../contributor.model';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-fund-me',
  templateUrl: './fund-me.component.html',
  styleUrls: ['./fund-me.component.css']
})
export class FundMeComponent implements OnInit {
  @Input() projectId;
  projectToDisplay;
  contributor: string;
  donation: any;
  projectGoal;

  constructor(private firebaseService: FirebaseService) { }

  fundFormShowing = false;

  ngOnInit() {
      this.firebaseService.getProjectById(this.projectId).subscribe(project => {
      this.projectToDisplay = project;
      this.projectGoal = project.goal;
      console.log(this.projectToDisplay);
    })
  }

  deductFromGoal(){
    this.donation = parseInt(this.donation);
    this.projectGoal = this.projectGoal - this.donation;
    this.firebaseService.updateProjectGoal(this.projectId, this.projectGoal);
  }

  revealFundForm(){
    this.fundFormShowing = true;
  }
}

import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { FirebaseService } from '../firebase.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  filterByCategory: string = "all";

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.projects = this.firebaseService.getProjects();
  }

  onChange(optionFromMenu) {
    this.filterByCategory = optionFromMenu;
  }
}

import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit() {
  }

  addProject( title:string, category:string, author:string, goal:number, description:string) {
    var newProject: Project = new Project(title, category, author, goal, description)
    this.firebaseService.pushProject(newProject);
    this.router.navigate(['/']);
  }
}

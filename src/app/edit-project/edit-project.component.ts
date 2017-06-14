import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Project } from '../project.model';


@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  projectId: string;
  project;
  title;
  author;
  category;
  goal;
  description;


  constructor(private route:ActivatedRoute, private router:Router, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.params['id'];
    this.project = this.firebaseService.getProjectById(this.projectId).subscribe(project=> {
      this.title = project.title;
      this.author = project.author;
      this.category = project.category;
      this.goal = project.goal;
      this.description = project.description;
    });
  }
  updateProject(){
    var updatedProject = new Project(this.title, this.category, this.author, this.goal, this.description)
    this.firebaseService.editProject(this.projectId, updatedProject);
    this.router.navigate(['/admin'])
  }

}

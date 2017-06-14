import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { FirebaseService } from '../firebase.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.projects = this.firebaseService.getProjects();
  }
  deleteProject(id){
    this.firebaseService.deleteProject(id);
  }


}

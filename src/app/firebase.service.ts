import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Injectable()
export class FirebaseService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('/projects');
  }

  getProjects() {
    return this.projects;
  }
  getProjectById(id) {
    return this.database.object('/projects/' + id);
  }
  pushProject(newProject: Project){
    this.projects.push(newProject);
  }
  editProject(id, updatedProject){
    this.projects.update(id,updatedProject);
  }
  deleteProject(id){
    this.projects.remove(id);
  }

}

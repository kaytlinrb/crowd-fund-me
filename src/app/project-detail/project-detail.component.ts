import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  showFavImage = false;
  projectId: string;
  project;
  constructor(private route:ActivatedRoute, private firebaseService:FirebaseService) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.params['id'];
    this.firebaseService.getProjectById(this.projectId).subscribe(projectFB =>{
      this.project = projectFB;
    });
  }
  favoriteProject(fav:boolean){
    this.firebaseService.updateProjectFav(this.projectId, fav);
  }
}

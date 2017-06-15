import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FirebaseService } from './firebase.service';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AdminComponent } from './admin/admin.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FundMeComponent } from './fund-me/fund-me.component';
import { CategoryPipe } from './category.pipe';


const appRoutes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'add-project', component: AddProjectComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'projects/:id', component: ProjectDetailComponent},
  { path: 'admin/edit/project/:id', component: EditProjectComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    AddProjectComponent,
    AdminComponent,
    EditProjectComponent,
    NavbarComponent,
    FundMeComponent,
    CategoryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

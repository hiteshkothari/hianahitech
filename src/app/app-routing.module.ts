import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummerComponent } from './summer/summer.component';
import { MonsoonComponent } from './monsoon/monsoon.component';
import { WinterComponent } from './winter/winter.component';
import { MakeComponent } from './make/make.component';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Make', component: MakeComponent },
  { path: 'summer', component: SummerComponent },
  { path: 'monsoon', component: MonsoonComponent },
  { path: 'winter', component: WinterComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'projects', component: ProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

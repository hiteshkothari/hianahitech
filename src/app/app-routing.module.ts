import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummerComponent } from './summer/summer.component';
import { MonsoonComponent } from './monsoon/monsoon.component';
import { WinterComponent } from './winter/winter.component';
import { MakeComponent } from './make/make.component';


const routes: Routes = [
  { path: '', redirectTo: 'Make', pathMatch: 'full' },
  { path: 'summer', component: SummerComponent },
  { path: 'monsoon', component: MonsoonComponent },
  { path: 'winter', component: WinterComponent },
  { path: 'Make', component: MakeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

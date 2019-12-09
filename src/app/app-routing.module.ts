import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WerkloosheidComponent } from './werkloosheid/werkloosheid.component'
import { JeugdvakantieComponent } from './jeugdvakantie/jeugdvakantie.component'

const routes: Routes = [
	{'path':'werkloosheid', component: WerkloosheidComponent }, 
	{'path':'jeugdvakantie', component: JeugdvakantieComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

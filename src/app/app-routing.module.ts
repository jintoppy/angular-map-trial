import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadPinComponent } from './pages/load-pin/load-pin.component';
import { PropertiesComponent } from './pages/properties/properties.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/load-pin',
    
  },
  {
    path: 'load-pin',
    component: LoadPinComponent    
  },
  {
    path: 'properties',
    component: PropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainerAppComponent } from './components/layout/container-app/container-app.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerAppComponent,
    children: [
      {
        path: '',
        loadChildren: () => 
          import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'about',
        loadChildren: () => 
          import('./modules/about/about.module').then(m => m.AboutModule)
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

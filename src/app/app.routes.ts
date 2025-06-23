import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'home',
    loadComponent: ()=> import ('./pages/home/home-page/home-page.component'),
    children: [
      {
        path: 'post',
        loadComponent: () => import ('./pages/post/post-page/post-page.component')
      },

      {
        path: 'find',
        loadComponent: () => import ('./pages/find/find-page/find-page.component')
      }

    ]
  }
];

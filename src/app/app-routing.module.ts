import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, Router, RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
    path: 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  { 
    path: 'orders',
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules,
      enableTracing: false
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  constructor(router: Router) {
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
    // console.log('Routes :', JSON.stringify(router.config, replacer, 2))
  }
}

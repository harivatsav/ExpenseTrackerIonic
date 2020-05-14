import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:"full"},
  
  {path: 'login',loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},  
  
  {path: '',loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  
  // {path: 'tab2page/:data',loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  
  {path: 'details',loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)},
  
  {path: 'details/:id',loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)},
  
  {path: 'sign-up',loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)},

  
  
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    // component: AboutComponent
    loadComponent: () => import('./about/about.component').then(c => c.AboutComponent)
  },
  {
    path: 'dashboard',
    // loadChildren: () => import('./dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule),
    loadChildren: () => import('./dashboard/route').then(m => m.DASHBOARD_ROUTES)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
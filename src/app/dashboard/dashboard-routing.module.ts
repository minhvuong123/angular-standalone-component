import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { TodayComponent } from "./today/today.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'today',
    component: TodayComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
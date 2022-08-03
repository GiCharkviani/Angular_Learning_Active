import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainListComponent } from "./main-list/main-list.component";
import { SideListComponent } from "./side-list/side-list.component";


const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch:'full'},
  {path: 'main', component: MainListComponent},
  {path: 'side', component: SideListComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}

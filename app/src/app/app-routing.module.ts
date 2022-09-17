import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from "./navigation/navbar.component";
import { EnterpriseRoutes } from "./pages/enterprise/enterprise.module";

const routes: Routes = [
  {
    path: 'navbar', //Nome do caminho dentro das rotas do App
    component: NavbarComponent,
    children: [...EnterpriseRoutes],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

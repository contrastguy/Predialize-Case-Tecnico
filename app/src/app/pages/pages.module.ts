import { NgModule } from "@angular/core";

import { ClientModule } from "./client/client.module";
import { EnterpriseComponent } from "./enterprise/enterprise.component";

@NgModule({
  declarations:[],
  imports: [ClientModule,EnterpriseComponent] //Importar Enterprise Component
})
export class PagesModule {}

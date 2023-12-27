import {Route, RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

const routes: Route[] = [
  {path: 'item', loadComponent: () => import("./item/item.component").then(m => m.ItemComponent)}
];

export const AppRouterModule: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes)

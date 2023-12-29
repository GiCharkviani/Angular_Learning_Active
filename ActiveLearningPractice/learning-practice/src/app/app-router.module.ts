import {Route, RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

export const routes: Route[] = [
  {path: 'item', loadComponent: () => import("./item/item.component").then(m => m.ItemComponent)}
];


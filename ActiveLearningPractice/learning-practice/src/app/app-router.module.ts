import {Route, RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

export const routes: Route[] = [
  {
    path: 'item/:id',
    title: 'Item clicked',
    loadComponent: () => import("./item/item.component").then(m => m.ItemComponent)},
];


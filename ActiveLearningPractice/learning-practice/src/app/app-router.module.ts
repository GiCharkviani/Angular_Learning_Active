import {Route} from '@angular/router';
import {SelectorsTesterComponent} from "./components/selectors/selectorsTester.component";
import {StylesTesterComponent} from "./components/styles/stylesTester.component";
import {InputPropertiesTesterComponent} from "./components/inputProperties/inputPropertiesTester.component";
import {OutputPropertiesTesterComponent} from "./components/outputProperties/outputPropertiesTester.component";

export const routes: Route[] = [
  {path: 'selector', component: SelectorsTesterComponent},
  {path: 'styles', component: StylesTesterComponent},
  {path: 'inputProperties', component: InputPropertiesTesterComponent},
  {path: 'outputProperties', component: OutputPropertiesTesterComponent}
];


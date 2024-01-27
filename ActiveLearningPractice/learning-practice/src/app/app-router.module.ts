import {Route} from '@angular/router';
import {SelectorsTesterComponent} from "./components/selectors/selectorsTester.component";
import {StylesTesterComponent} from "./components/styles/stylesTester.component";
import {InputPropertiesTesterComponent} from "./components/inputProperties/inputPropertiesTester.component";
import {OutputPropertiesTesterComponent} from "./components/outputProperties/outputPropertiesTester.component";
import {ContentProjectionTesterComponent} from "./components/contentProjection/contentProjectionTester.component";
import {HostElementsComponent} from "./components/hostElements/hostElements.component";

export const routes: Route[] = [
  {path: 'selector', component: SelectorsTesterComponent},
  {path: 'styles', component: StylesTesterComponent},
  {path: 'inputProperties', component: InputPropertiesTesterComponent},
  {path: 'outputProperties', component: OutputPropertiesTesterComponent},
  {path: 'contentProjection', component: ContentProjectionTesterComponent},
  {path: 'hostElements', component: HostElementsComponent}
];


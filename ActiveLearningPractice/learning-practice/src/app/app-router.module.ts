import {Route, UrlSegment} from '@angular/router';
import {SelectorsTesterComponent} from "./components/selectors/selectorsTester.component";
import {StylesTesterComponent} from "./components/styles/stylesTester.component";
import {InputPropertiesTesterComponent} from "./components/inputProperties/inputPropertiesTester.component";
import {OutputPropertiesTesterComponent} from "./components/outputProperties/outputPropertiesTester.component";
import {ContentProjectionTesterComponent} from "./components/contentProjection/contentProjectionTester.component";
import {HostElementsTesterComponent} from "./components/hostElements/hostElementsTester.component";
import {LifeCyclesTesterComponent} from "./components/lifeCycles/lifeCyclesTester.component";
import {ChildrenQueriesTestingComponent} from "./components/childrenQueries/childrenQueriesTesting.component";
import {DomAPIsComponent} from "./components/domAPIs/domAPIs.component";
import {DynamicComponentsTesterComponent} from "./components/dynamicComponents/dynamicComponentsTester.component";
import {EventBindingTestingComponent} from "./templateSyntax/eventBinding/eventBindingTesting.component";
import {DirectivesOverviewTesterComponent} from "./directives/overview/directivesOverviewTester.component";
import {AttributeTesterComponent} from "./directives/attributeDirectives/attributeTester.component";
import {StructuralTesterComponent} from "./directives/structuralDirectives/structuralTester.component";
import {DiTesterComponent} from "./DI/diTester.component";
import {SignalsTesterComponent} from "./signals/signalsTester.component";
import {SignalsObservablesTesterComponent} from "./signals/signalsObservablesTester.component";
import {canActivate, resolveData} from "./routing/guards";

export const routes: Route[] = [
  {path: 'selector', component: SelectorsTesterComponent},
  {path: 'styles', component: StylesTesterComponent},
  {path: 'inputProperties', component: InputPropertiesTesterComponent},
  {path: 'outputProperties', component: OutputPropertiesTesterComponent},
  {path: 'contentProjection', component: ContentProjectionTesterComponent},
  {path: 'hostElements', component: HostElementsTesterComponent},
  {path: 'lifeCycles', component: LifeCyclesTesterComponent},
  {path: 'childrenQueries', component: ChildrenQueriesTestingComponent},
  {path: 'domapis', component: DomAPIsComponent},
  {path: 'dynamicComponents', component: DynamicComponentsTesterComponent},
  {path: 'eventBinding', component: EventBindingTestingComponent},
  {path: 'directivesOverview', component: DirectivesOverviewTesterComponent},
  {path: 'attributeDirectives', component: AttributeTesterComponent},
  {path: 'structuralDirectives', component: StructuralTesterComponent},
  {path: 'di', component: DiTesterComponent},
  {path: 'signals', component: SignalsTesterComponent},
  {path: 'signalsObservables', component: SignalsObservablesTesterComponent},
  {
    resolve: {data: resolveData},
    canActivate: [canActivate], loadComponent: () => import('./routing/routerTester.component')
      .then(m => m.RouterTesterComponent),
    matcher: (url) => {
      // console.log(url, 'URL')
      return {consumed: url, posParams: {userName: new UrlSegment(url[0].path, {})}};
    }
  }
];




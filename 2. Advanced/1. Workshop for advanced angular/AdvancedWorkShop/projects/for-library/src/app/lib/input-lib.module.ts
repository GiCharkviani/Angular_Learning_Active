import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InputRefDirective } from "./common/input-ref.directive";
import { InputLibComponent } from "./input-lib/input-lib.component";

@NgModule({
  declarations:[InputLibComponent, InputRefDirective],
  imports: [CommonModule],
  exports: [InputLibComponent, InputRefDirective]
})
export class InputLibModule{}

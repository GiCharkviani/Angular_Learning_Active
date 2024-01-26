import {booleanAttribute, Component, Input} from "@angular/core";
import {ParentComponent} from "./parent.component";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `
    <h2>Child of Parent</h2>
    <p>my name is: {{name}}</p>
    <p>my age is: {{age}}</p>

    <hr>
    <h2>Child</h2>
    <p>Hobby: {{hobby}}</p>
    <p>Boolean: {{amIStudent}}</p>
    <p>My dog name: {{dogName}}</p>
    <p>Favourite food: {{favouriteFood}}</p>
  `,
  styles: ``,
  inputs: ['name: parentName', 'age: parentAge']
})
export class ChildComponent extends ParentComponent {
  protected favouriteFood = ''

  @Input({
    required: true,
    transform: trimString
  }) hobby!: string;

  @Input({
    transform: booleanAttribute
  }) amIStudent!: boolean;

  @Input({alias: 'myDogName'}) dogName!: string;

  @Input('FavFood')
  get favFood() {
    return this.favouriteFood;
  }
  set favFood(food: string) {
    if (food) {
      this.favouriteFood = food;
    }
  }

  constructor() {
    super();
    console.warn('CHILD CREATED');
  }


}

function trimString(value: number | undefined): string | undefined {
  return value?.toString().trim()  + ' edited' ?? '';
}

import {LogMethod, MaxLength, PersonClassDecorator, Required} from "./decorators";

@PersonClassDecorator({
  selector: 'app-component'
})
export class Person {
  @MaxLength(4)
  private name: string;

  constructor(name: string) {
    console.log(name, '-FROM_CONSTRUCTOR')
    this.name = name;
  }

  @LogMethod
  public callYourName( newName: string, @Required age: number) {
    console.log(`Your name is ${newName}`)
  }
}


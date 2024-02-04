class Component {
  public user!: UserService;
  constructor(user: UserService) {
    this.user = user;
  }

}

class UserService {

  public sayHi() {
    console.log('Hi')
  }

}


class Injector {
  private _container = new Map();


  constructor(private _providers: any[] = []) {
    this._providers.forEach(service => {
      this._container.set(service, new service());
    })
  }

  public get(service: any) {
    const serviceInstance = this._container.get(service);
    if(!service) throw Error('No provider');
    return serviceInstance;
  }
}


const injector = new Injector([UserService]);
const component = new Component(injector.get(UserService));

component.user.sayHi();

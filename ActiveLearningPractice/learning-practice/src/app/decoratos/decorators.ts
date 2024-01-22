/*
 3 tpes of decorator:
 1. Class decorator
 2. Method decorator
 3. Field decorator
 4. Parameter decorator
 */


// Class decorator
export function PersonClassDecorator(metadata: {selector: string}) {
  return function (constructor: Function) {
    // console.log(metadata, ' METADATA')
    // console.dir(constructor, ' CONSTRUCTOR')
    // console.log('I am from PersonClassDecorator');

    constructor.prototype.selector = metadata.selector;
  }
}

// Method decorator
export function LogMethod(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  // console.log(target, 'TARGET')
  // console.log(propertyName, 'PROPERTY_NAME')
  // console.log(descriptor, 'DESCRIPTOR')
  descriptor.writable = false;
  descriptor.enumerable = true;
  descriptor.value = function () {
    console.log('მოტყუვდიიი!!!')
  }
}


// Property decorator
export function MaxLength(length: number) {
  return function (target: any, propertyKey: string) {
    // console.log(length, 'LENGTH')
    // console.log(target, 'TARGET')
    // console.log(propertyKey, 'PROPERTY_KEY')

    let value: string;

    const getter = function () {
      return value;
    }

    const setter = function (newVal: string) {
      if(newVal.length > length) {
        console.error(`Error: ${propertyKey} cannot exceed ${length} characters`)
      } else {
        value = newVal;
      }
    }


    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    })
  }
}


// Parameter decorator
export function Required(target: any, propertyName: string, index: number) {
  console.log(target, 'TARGET')
  console.log(propertyName, 'PROPERTY_NAME')
  console.log(index, 'INDEX')

  console.log(`Adding required metadata for ${propertyName} parameter at index ${index}`);
}

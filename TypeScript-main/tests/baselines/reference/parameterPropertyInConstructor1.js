//// [tests/cases/compiler/parameterPropertyInConstructor1.ts] ////

//// [parameterPropertyInConstructor1.ts]
declare module mod {
  class Customers {
    constructor(public names: string);
  }
}


//// [parameterPropertyInConstructor1.js]

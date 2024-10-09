import { Dog } from "./08-inheritance";

function getValue<T>(value: T) { //*Usar T es una convención para tus propios tipados
  return value;
}

getValue<number>(12).toFixed()
getValue<string>('12').length
getValue<boolean>(true).toString()

const doggy = new Dog('doggy', 'Snoop dog')
getValue<Dog>(doggy)
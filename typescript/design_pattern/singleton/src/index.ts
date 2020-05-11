import {Singleton} from './Singleton';

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

instance1.countUpValue();
instance2.countUpValue();

console.log(`The value of instance1: ${instance1.getValue()} and instance2: ${instance2.getValue()} are same !!`)
console.log('cause instance is singleton !!')

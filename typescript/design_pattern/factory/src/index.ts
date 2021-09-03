import {Factory} from './Factory';

const factory = new Factory();

const A1 = factory.create('A');
A1.hello();

const A2 = factory.create('A');
A2.hello();

const B = factory.create('B');
B.hello()




import {ISample, SampleA, SampleB} from './Sample';

export class Factory {

    create(type: 'A' | 'B' = 'A'): ISample {
        if(type === 'B'){
            return new SampleB();
        }
        return new SampleA();
    }
}


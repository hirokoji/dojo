export interface ISample{
    hello: () => void;
}

export class SampleA implements  ISample {
    hello() {
        console.log('Hello, This is Sample A')
    }
}

export class SampleB implements  ISample {

    hello() {
        console.log('Hello, This is Sample B')
    }
}

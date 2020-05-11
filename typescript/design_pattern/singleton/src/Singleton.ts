export class Singleton{

    private static instance: Singleton;
    private value: number;

    constructor() {
        this.value = 0;
    }

    public static getInstance(): Singleton{

        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public countUpValue():void{
        this.value++;
    }

    public getValue(){
        return this.value;
    }
}
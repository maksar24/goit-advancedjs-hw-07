class Key {
    private signature: number;
    constructor() {
        this.signature = Math.floor(Math.random() * 101);
    }
    
    public getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key = new Key) { }

    getKey() {
        return this.key;
    }
}

abstract class House {
    private tenants: Person[] = [];
    protected door = true;

    constructor(private key: Key) { }

    comeIn(tenant: Person): void {
        this.door && this.tenants.push(tenant);
    }
}

class MyHouse extends House {

    openDoor(randomKey: Key): void {
        this.door = randomKey.getSignature() === key.getSignature();
    } 
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};
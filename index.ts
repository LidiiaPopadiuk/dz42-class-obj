class Key {
  private signature: number;
  constructor() {
    this.signature = Math.floor(Math.random() * 1000);
  }
  getSignature(): number {
    return this.signature;
  }
}
class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: "open" | "close" = "close";
  protected key: Key;
  protected tenants: Person[] = [];
  constructor(key: Key) {
    this.key = key;
  }
  tenantsLog(): void {
    console.log(this.tenants);
    
  }

  comeIn(person: Person) {
    if (this.door === "open") {
      this.tenants.push(person);
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (this.key === key) {
      this.door = "open";
    }
  }
}

const key = new Key();
const person = new Person(key);
const house = new MyHouse(key)
house.openDoor(person.getKey())
house.comeIn(person)
house.tenantsLog();

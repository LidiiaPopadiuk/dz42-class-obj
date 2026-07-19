"use strict";
class Key {
    signature;
    constructor() {
        this.signature = Math.floor(Math.random() * 1000);
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    key;
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    door = "close";
    key;
    tenants = [];
    constructor(key) {
        this.key = key;
    }
    tenantsLog() {
        console.log(this.tenants);
    }
    comeIn(person) {
        if (this.door === "open") {
            this.tenants.push(person);
        }
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (this.key === key) {
            this.door = "open";
        }
    }
}
const key = new Key();
const person = new Person(key);
const house = new MyHouse(key);
house.openDoor(person.getKey());
house.comeIn(person);
house.tenantsLog();

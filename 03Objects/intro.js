"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    console.log("My name is " + user.name + ", my email is " + user.email + " and i am a paid user: " + user.isPaid);
}
createUser({ name: "Ivan", email: "ivan@g.com", isPaid: true });

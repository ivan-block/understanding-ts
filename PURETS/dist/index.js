"use strict";
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
const user = new User("ivan@dev.com", "Ivan");
user.city;

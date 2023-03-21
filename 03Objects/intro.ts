type User = {
    readonly _id: number;
    name: string;
    email: string;
    isPaid: true;
}

function createUser(user: User) {
    console.log("User id is: " + user._id + " My name is " + user.name + ", my email is " + user.email + " and i am a paid user: " + user.isPaid)
}
createUser({_id: 1, name: "Ivan", email: "ivan@g.com", isPaid: true})

export {}
function addTwo(num1: number, num2: number): number {
    return num1 + num2;
    // return "hello";
}

function loginUser(
    name: string,
    email: string,
    hasAccount: boolean
) {
    return `My name is ${name}, my mail is ${email}`
}

loginUser("Ivan", "ivan@g.com", true);
addTwo(2, 5);

export {}

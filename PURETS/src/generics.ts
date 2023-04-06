function identityOne<T>(val: T): T {
    return val
}

function identityTwo<Type>(val: Type): Type {
    return val
}

interface Bottle {
    type: number,
    name: string
}

function identityThree<Bottle>(val: Bottle): Bottle  {
    return val
}

identityThree({})

// function searchProducts<T>(products: T[]): T {
//     return products[]
// }

const searchProducts = <T>(products: T[]): T => {
    return products[1]
}
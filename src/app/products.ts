export interface product{
    id: number;
    name: string;
    price: number;
    description: string;
}

export const products = [
    {
        id: 1,
        name: "Iphone 4",
        price: 799,
        description: "This is a test description"
    },
    {
        id: 2,
        name: "Iphone 5",
        price: 999,
        description: "This is a test description"
    },
    {
        id: 3,
        name: "Iphone 6",
        price: 1799,
        description: "This is a test description"
    }
]
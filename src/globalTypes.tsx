export interface ProductInterface {
    title: string;
    id: number
    name: string;
    price: number;
    image: string;
}

export interface StateInterface{
    products: ProductInterface[]
    shoppingCart: ProductInterface []
}

export interface ActionInterface {
    type: string;
    payload: unknown;
}
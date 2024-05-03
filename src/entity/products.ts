import { error } from "console";

export type ProductProps = {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export class Product {
    private constructor(readonly props: ProductProps){}

    public static create(name: string, price: number){
        return new Product({
            id: crypto.randomUUID().toString(),
            name,
            price,
            quantity:0
        })
    }

    public get id(){
        return this.props.id;
    }

    public get name(){
        return this.props.name;
    }

    public get price(){
        return this.props.price;
    }

    public get quantity(){
        return this.props.quantity;
    }

    public increaseStock(amount: number){
        this.props.quantity += amount;
    }

    public sell(amount: number){
        if(this.props.quantity < amount) {
            throw new Error("quantity is not enough for sale.")
        }

        this.props.quantity -= amount;
    }

}
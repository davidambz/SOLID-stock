import { Product } from "../../entity/products";

export interface ProductRepository {
    save(product: Product): Promise<void>;
    list(): Promise<Product[]>;
}
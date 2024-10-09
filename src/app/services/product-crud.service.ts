import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";
import { ProductBaseHttpService } from "./product-base-http.service";

export class ProductCRUDService {
    private url: string = 'https://api.escuelajs.co/api/v1/categories';
    private http = new ProductBaseHttpService(this.url);

    async getAll(): Promise<Product[]> {
        return this.http.getAll();
    }

    async update(id: Product['id'], changes: Partial<Product>) {
        return this.http.update(id, changes);
    }
}
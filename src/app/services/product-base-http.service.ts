import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";

export class ProductBaseHttpService extends BaseHttpService<Product> {
    
    otroRequest() {
        console.log('otro request');
    }

}
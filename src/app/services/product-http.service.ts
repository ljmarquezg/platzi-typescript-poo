import axios from "axios";
import { ProductService } from "../models/product-service.model";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";

export class ProductHttpService implements ProductService{
    private url: string = 'https://api.escuelajs.co/api/v1/products';

    async create(dto: CreateProductDto): Promise<Product> {
        const {data} = await axios.post(this.url, dto);
        return data;
    }

    add(product: Product): Product {
        throw new Error("Method not implemented.");
    }

    async update(id: Product["id"], changes: UpdateProductDto) {
        const {data} = await axios.put(`${this.url}/${id}`, changes);
        return data;
    }

    async findOne(id: Product["id"]): Promise<Product | undefined> {
        const { data } = await axios.get<Product>(`${this.url}/${id}`);
        return data;
    }

    async getAll(): Promise<Product[]> {
        const { data } = await axios.get<Product[]>(this.url);
        return data;

    }
}
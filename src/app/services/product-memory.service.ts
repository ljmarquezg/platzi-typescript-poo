import { faker } from "@faker-js/faker";

import { Product } from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';


export class ProductMemoryService {
    private _products: Product[] = [];

    create(data: CreateProductDto): Product {
        const newProduct = {
            ...data,
            id: faker.number.int(),
            category: {
                id: data.categoryId,
                name: faker.commerce.department(),
                image: faker.image.url(),
            }
        }
        return this.add(newProduct);
    }

    add(product: Product): Product {
        this._products.push(product);
        return product;
    }

    updateProduct(id: Product['id'], changes: UpdateProductDto ): Product {
        const index = this._products.findIndex(item => item.id === id);
        const prevData = this._products[index];
        this._products[index] = {
            ...prevData,
            ...changes
        }
        return this._products[index];
    }

    findOne(id: Product['id']): Product | undefined {
        return this._products.find(item => item.id === id);
    }

    getAll(): Product[] {
        return this._products;
    }
};
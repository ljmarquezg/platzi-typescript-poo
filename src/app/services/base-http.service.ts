import axios from 'axios';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { UpdateProductDto } from '../dtos/product.dto';
/* import { Category } from "../models/category.model";
export class BaseHttpService<TypeClass> {
    data: TypeClass[] = [];

    getAll(): TypeClass[] | Promise<TypeClass[]> {
        return this.data;
    }
}

const service = new BaseHttpService<string>();
service.data.push('Hello');

const service2 = new BaseHttpService<number>();
service2.data.push(100);

const service3 = new BaseHttpService<Category>();
service3.data.push({ id: 100, name: 'Category 1', image: 'image.jpg' });

service.getAll(); // ['Hello']
service2.getAll(); // [100]
service3.getAll(); // [{ id: 100, name: 'Category 1', image: 'image.jpg' }] */

export class BaseHttpService<TypeClass> {
    
    constructor(
        protected url: string
    ){}

    async getAll(): Promise<TypeClass[]> {
        const {data} = await axios.get<TypeClass[]>(this.url);
        return data;
    }

    async update<ID, DTO>(id: ID, changes: DTO) {
        const {data} = await axios.put(`${this.url}/${id}`, changes);
        return data;
    }
}
(async () => {

    const url1 ='https://api.escuelajs.co/api/v1/products';
    const productService = new BaseHttpService<Product>(url1);
    const productResponse = await productService.getAll();
    console.log(productResponse.length);


    productService.update<Product['id'], UpdateProductDto>(1,
        { title: 'New Title' }
    );

    console.log('-------------------'.repeat(10));

    const url2 ='https://api.escuelajs.co/api/v1/categories';
    const categoryService = new BaseHttpService<Category>(url2);
    const catResponse = await categoryService.getAll();
    console.log(catResponse.length);

    categoryService.update<Product['id'], UpdateProductDto>(1,
        { title: 'New Title' }
    );
})();
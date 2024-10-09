
import { ProductHttpService } from "./services/product-http.service";

const productService = new ProductHttpService();

productService.create({
    categoryId: 1,
    title: 'Product 1',
    price: 100,
    description: 'Description of product 1',
    images: []
});

const products = productService.getAll();
const productId = products[0].id;
productService.update(productId, {
    title: 'Product 1 updated',
});
const response = productService.findOne(productId);
console.log(response);
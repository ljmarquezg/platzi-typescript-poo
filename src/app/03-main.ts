
import { ProductHttpService } from "./services/product-http.service";

const productService = new ProductHttpService();
(async () => {
    try {
        console.log('---'.repeat(10));
        console.log('getAll');
        const products = await productService.getAll();
        console.log(products.length);
        console.log(products.map(product => `${product.id} ${product.title}`)); 
        
        const productId = products[0].id;
        
        console.log('---'.repeat(10));
        console.log('Update');
        await productService.update(productId,{
            title: 'Product 1 updated',
            price: 900,
            description: 'Description of product 1 updated',
        });

        console.log('---'.repeat(10));
        console.log('findOne');
        const productUpdated = await productService.findOne(productId);
        console.log(productUpdated); 
    } catch (error) {
        console.error(error);
    }
})();



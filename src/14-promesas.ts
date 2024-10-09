import axios from "axios";

(async () => {
    
    function delay(time: number): Promise<boolean> {
        console.log('Delaying...');
        const promise = new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, time);
        });

        return promise;
    }

    function getProduct(): Promise<any> {
        const promise =  axios.get('https://api.escuelajs.co/api/v1/products')
        return promise;
    }

    async function getProductAsync(): Promise<any> {
        const promise = await axios.get('https://api.escuelajs.co/api/v1/products')
        return promise.data;
    }

    const response: boolean = await delay(2000);
    console.log(response);

    const products = await getProduct();
    console.log(products.data);

    const productsAsync = await getProductAsync();
    console.log(productsAsync);
})();

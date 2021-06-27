import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
@Injectable()
export class ProductsService {
    private counterId = 1;
    private products: Array<Product> = [
        {
            id: 1,
            name: 'Product 1',
            description: 'bla bla',
            price: 122,
            stock: 50,
            image: '',
        },
    ];

    findAll() {
        return this.products;
    }

    findOne(id: number) {
        return this.products.find((item) => item.id === id);
    }

    create(payload: any) {
        const newProduct = {
            id: this.counterId++,
            ...payload,
        };
        this.products.push(newProduct);
        return newProduct;
    }

    update(id: number, payload: any) {
        const updatedProduct = {
            id,
            ...payload,
        };
        const productIndex = this.products.findIndex((item) => item.id === id);

        if (productIndex > -1) {
            this.products[productIndex] = updatedProduct;
            return {
                message: 'Product updated successfuly',
                product: updatedProduct,
            };
        } else {
            return { message: 'Product not found' };
        }
    }

    delete(id: number) {
        const productIndex = this.products.findIndex((item) => item.id === id);

        if (productIndex > -1) {
            const deletedProduct = this.products.splice(productIndex, 1);

            return {
                message: 'Product deleted successfuly',
                deletedProduct,
            };
        } else {
            return { message: 'Product not found' };
        }
    }
}

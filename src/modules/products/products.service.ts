import { Injectable, NotFoundException } from '@nestjs/common';
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
        const product = this.products.find((item) => item.id === id);
        if (!product) {
            throw new NotFoundException(`Product #${id} not found`);
        }
        return product;
    }

    create(payload: any) {
        const newId = (this.counterId += 1);
        const newProduct = {
            id: newId,
            ...payload,
        };
        this.products.push(newProduct);
        return newProduct;
    }

    update(id: number, payload: any) {
        // const updatedProduct = {
        //     id,
        //     ...payload,
        // };
        // const productIndex = this.products.findIndex((item) => item.id === id);

        // if (productIndex > -1) {
        //     this.products[productIndex] = updatedProduct;
        //     return {
        //         message: 'Product updated successfuly',
        //         product: updatedProduct,
        //     };
        // } else {
        //     return { message: 'Product not found' };
        // }

        // Como lo haría un google expert
        const product = this.findOne(id);
        if (product) {
            const index = this.products.findIndex((item) => item.id === id);
            this.products[index] = {
                ...product,
                ...payload,
            }; //hace un merge entre el producto anterior y actualiza al final con los atributos del payload
            return this.products[index];
        }

        return null;
    }

    delete(id: number) {
        // const productIndex = this.products.findIndex((item) => item.id === id);

        // if (productIndex > -1) {
        //     const deletedProduct = this.products.splice(productIndex, 1);

        //     return {
        //         message: 'Product deleted successfuly',
        //         deletedProduct,
        //     };
        // } else {
        //     return { message: 'Product not found' };
        // }

        //Como lo haría un google expert
        const index = this.products.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new NotFoundException(`Product #${id} not found`);
        }

        return this.products[index];
    }
}

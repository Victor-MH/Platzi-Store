import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateProductDto } from '../products/products.dtos';
import { Brand } from './brand.entity';
import { CreateBrandDto } from './brands.dtos';

@Injectable()
export class BrandsService {
    counterId = 2;
    brands: Brand[] = [
        {
            id: 1,
            name: 'Addidas',
        },
        {
            id: 2,
            name: 'Skullcandy',
        },
    ];

    findAll() {
        return this.brands;
    }

    findOne(id: number) {
        const index = this.brands.findIndex((brand) => brand.id === id);
        if (index === -1) {
            throw new NotFoundException(`Brand with id #${id} not found`);
        }

        return this.brands[index];
    }

    create(payload: CreateBrandDto) {
        const newId = (this.counterId += 1);
        const newBrand = {
            id: newId,
            ...payload,
        };

        this.brands.push(newBrand);
        return newBrand;
    }

    update(id: number, payload: UpdateProductDto) {
        const brand = this.findOne(id);
        if (!brand) {
            throw new NotFoundException(`Brand with id #${id} not found`);
        }

        const index = this.brands.findIndex((brand) => brand.id === id);
        this.brands[index] = {
            ...brand,
            ...payload,
        };

        return this.brands[index];
    }

    delete(id: number) {
        const brand = this.findOne(id);
        if (!brand) {
            throw new NotFoundException(`Brand with id #${id} not found`);
        }

        const index = this.brands.findIndex((brand) => brand.id === id);
        this.brands.splice(index, 1);

        return brand;
    }
}

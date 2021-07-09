import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common';
import { UpdateProductDto } from '../products/products.dtos';
import { CreateBrandDto } from './brands.dtos';

import { BrandsService } from './brands.service';

@Controller('brands')
export class BrandsController {
    constructor(private brandsService: BrandsService) {}

    @Get()
    getBrands() {
        return {
            message: `Check out the best brands of the world`,
            brand: this.brandsService.findAll(),
        };
    }

    @Get(':id')
    getBrand(@Param('id', ParseIntPipe) id: number) {
        return this.brandsService.findOne(id);
    }

    @Post()
    createBrand(@Body() payload: CreateBrandDto) {
        return {
            message: 'New brand created',
            brand: this.brandsService.create(payload),
        };
    }

    @Put(':id')
    updateBrand(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: UpdateProductDto,
    ) {
        return {
            message: `Brand with id ${id} has been updated`,
            ...this.brandsService.update(id, payload),
        };
    }

    @Delete(':id')
    deleteBrand(@Param('id', ParseIntPipe) id: number) {
        return {
            message: `Brand with id ${id} has been deleted`,
            ...this.brandsService.delete(id),
        };
    }
}

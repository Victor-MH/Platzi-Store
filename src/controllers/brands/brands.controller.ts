import { Controller, Get, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
    @Get()
    getBrands() {
        return `Check out the best brands of the world`;
    }

    @Get(':id')
    getBrand(@Param('id') id: number) {
        return `Brand number ${id}`;
    }
}

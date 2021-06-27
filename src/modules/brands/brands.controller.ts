import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';

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

    @Post()
    createBrand(@Body() payload: any) {
        return {
            message: 'New brand created',
            payload,
        };
    }

    @Put(':id')
    updateBrand(@Param('id') id: number, @Body() payload: any) {
        return {
            id,
            message: `Brand with id ${id} has been updated`,
            payload,
        };
    }

    @Delete(':id')
    deleteBrand(@Param('id') id: number) {
        return {
            id,
            message: `Brand with id ${id} has been deleted`,
        };
    }
}

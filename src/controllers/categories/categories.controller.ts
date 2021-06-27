import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
    @Get(':id/products/:productId')
    getCategories(@Param('id') id: any, @Param('productId') productId: string) {
        return `Product ${productId} from category ${id}`;
    }

    @Post()
    createCategory(@Body() payload: any) {
        return {
            message: 'New category created',
            payload,
        };
    }
}

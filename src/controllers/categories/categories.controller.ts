import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
    @Get(':id/products/:productId')
    getCategories(@Param('id') id: any, @Param('productId') productId: string) {
        return `Product ${productId} from category ${id}`;
    }
}

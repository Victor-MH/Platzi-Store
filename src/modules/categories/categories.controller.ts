import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';

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

    @Put(':id')
    updateCategory(@Param('id') id: number, @Body() payload: any) {
        return {
            id,
            message: `Category with id ${id} has been updated`,
            payload,
        };
    }

    @Delete(':id')
    deleteCategory(@Param('id') id: number) {
        return {
            id,
            message: `Category with id ${id} has been deleted`,
        };
    }
}

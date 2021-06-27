import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
    @Get()
    getOrders() {
        return `Review here our orders`;
    }

    @Get(':id')
    getOrder(@Param('id') id: number) {
        return `Order number ${id}`;
    }

    @Post()
    createOrder(@Body() payload: any) {
        return {
            message: 'New order created',
            payload,
        };
    }

    @Put(':id')
    updateOrder(@Param('id') id: number, @Body() payload: any) {
        return {
            id,
            message: `Order with id ${id} has been updated`,
            payload,
        };
    }

    @Delete(':id')
    deleteOrder(@Param('id') id: number) {
        return {
            id,
            message: `Order with id ${id} has been deleted`,
        };
    }
}

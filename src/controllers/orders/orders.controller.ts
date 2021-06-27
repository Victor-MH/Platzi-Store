import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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
}

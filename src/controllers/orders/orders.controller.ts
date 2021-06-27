import { Controller, Get, Param } from '@nestjs/common';

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
}

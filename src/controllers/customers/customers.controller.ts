import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
    @Get()
    getCustomers() {
        return `Welcome new customers`;
    }

    @Get(':id')
    getCustomer(@Param('id') id: number) {
        return `Customer number ${id}`;
    }

    @Post()
    createCustomer(@Body() payload: any) {
        return {
            message: 'New customer created',
            payload,
        };
    }
}

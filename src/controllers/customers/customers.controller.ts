import { Controller, Get, Param } from '@nestjs/common';

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
}

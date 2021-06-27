import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';

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

    @Put(':id')
    updateCustomer(@Param('id') id: number, @Body() payload: any) {
        return {
            id,
            message: `Customer with id ${id} has been updated`,
            payload,
        };
    }

    @Delete(':id')
    deleteCustomer(@Param('id') id: number) {
        return {
            id,
            message: `Customer with id ${id} has been deleted`,
        };
    }
}

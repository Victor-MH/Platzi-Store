import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getUsers() {
        return `New users get free shipping today!`;
    }

    @Get(':id')
    getUser(@Param('id') id: number) {
        return `User number ${id}`;
    }

    @Post()
    createUser(@Body() payload: any) {
        return {
            message: 'New user created',
            payload,
        };
    }
}

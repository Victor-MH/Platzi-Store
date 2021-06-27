import { Controller, Get, Param } from '@nestjs/common';

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
}

import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';

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

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() payload: any) {
        return {
            id,
            message: `User with id ${id} has been updated`,
            payload,
        };
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return {
            id,
            message: `User with id ${id} has been deleted`,
        };
    }
}

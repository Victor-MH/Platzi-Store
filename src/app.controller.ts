import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('nest')
    newEndpoint() {
        return 'Aprendiendo Nest';
    }

    @Get('/ruta/') //No afectan las diagonales
    hello() {
        return 'con /sas/';
    }
}

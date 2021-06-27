import { Controller, Get, Param } from '@nestjs/common';
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

    @Get('products/:id')
    getProduct(@Param() params: any) {
        return `product ${params.id}`;
    }

    @Get('categories/:id/products/:productId')
    getCategories(@Param('id') id: any, @Param('productId') productId: string) {
        return `Product ${productId} from category ${id}`;
    }

    @Get('productos/:productId') //Definir el nombre del atributo que vamos a recibir
    getProduct2(@Param('productId') productId: string) {
        return `product ${productId}`;
    }
}

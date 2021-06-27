import { Controller, Get, Param, Query } from '@nestjs/common';
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

    //Lo tomaría como un id para la ruta pruducts/:id
    //Para que no choquen hay que definir las rutas estáticas
    //antes de las rutas dinámicas
    //En este caso primero products/filter y debajo products/:id
    @Get('products/filter')
    getProductFilter() {
        return `Yo soy un filtro`;
    }

    @Get('products/:id')
    getProduct(@Param() params: any) {
        return `product ${params.id}`;
    }

    @Get('productos/:productId') //Definir el nombre del atributo que vamos a recibir
    getProduct2(@Param('productId') productId: string) {
        return `product ${productId}`;
    }

    @Get('categories/:id/products/:productId')
    getCategories(@Param('id') id: any, @Param('productId') productId: string) {
        return `Product ${productId} from category ${id}`;
    }

    @Get('products')
    getProducts(
        @Query('limit') limit = 100, //Ya infiere que es number
        @Query('offset') offset = 0, //Ahora usan parametros por defecto
        @Query('brand') brand: string,
        //products?limit=5&offset=9&brand=addidas
    ) {
        // const { limit, offset } = params;
        return `Product from brand with ${brand} limit=${limit}, offset=${offset}`;
    }
}

import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products') //Nos evita escribir products como base en cada endpoint
export class ProductsController {
    //Lo tomaría como un id para la ruta pruducts/:id
    //Para que no choquen hay que definir las rutas estáticas
    //antes de las rutas dinámicas
    //En este caso primero products/filter y debajo products/:id
    @Get('filter')
    getProductFilter() {
        return `Yo soy un filtro`;
    }

    @Get(':id')
    getProduct(@Param() params: any) {
        return `product ${params.id}`;
    }

    @Get('products2/:productId') //Definir el nombre del atributo que vamos a recibir
    getProduct2(@Param('productId') productId: string) {
        return `product desctructured ${productId}`;
    }

    @Get('')
    getProducts(
        @Query('limit') limit = 100, //Ya infiere que es number
        @Query('offset') offset = 0, //Ahora usan parametros por defecto
        @Query('brand') brand: string,
        //products?limit=5&offset=9&brand=addidas
    ) {
        // const { limit, offset } = params;
        return `Product from brand ${brand} with limit=${limit}, offset=${offset}`;
    }

    //orders, users, customers, brands
}

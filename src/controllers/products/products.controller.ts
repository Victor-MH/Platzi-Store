import {
    Controller,
    Get,
    Param,
    Post,
    Query,
    Body,
    Put,
    Delete,
    HttpStatus,
    HttpCode,
    Res,
} from '@nestjs/common';

import { Response } from 'express';

@Controller('products') //Nos evita escribir products como base en cada endpoint
export class ProductsController {
    //Lo tomaría como un id para la ruta pruducts/:id
    //Para que no choquen hay que definir las rutas estáticas
    //antes de las rutas dinámicas
    //En este caso primero products/filter y debajo products/:id
    // @Get()
    // getAllProducts() {
    //     return {
    //         message: `New products everyday`,
    //     };
    // }

    @Get('filter')
    getProductFilter() {
        return {
            message: `Yo soy un filtro`,
        };
    }

    @Get(':id')
    @HttpCode(HttpStatus.ACCEPTED) //Definir un httpcode personalizado
    getProduct(@Res() response: Response, @Param() params: any) {
        response.status(200).send({
            message: `product ${params.id}`,
        });
    }

    @Get('products2/:productId') //Definir el nombre del atributo que vamos a recibir
    getProduct2(@Param('productId') productId: string) {
        return {
            message: `product desctructured ${productId}`,
        };
    }

    @Get()
    getProducts(
        @Query('limit') limit = 100, //Ya infiere que es number
        @Query('offset') offset = 0, //Ahora usan parametros por defecto
        @Query('brand') brand: string,
        //products?limit=5&offset=9&brand=addidas
    ) {
        // const { limit, offset } = params;
        return {
            message: `Product from brand ${brand} with limit=${limit}, offset=${offset}`,
            limit,
            offset,
            brand,
        };
    }

    //Se puede especificar cada elemento del body, pero siendo que puede
    //haber muchos deja de ser conveniente
    //@Body('name') name: string, @Body('price') price: string (JAMAS ENVIES PRICE DESDE CLIENTEEEE)
    @Post()
    createProduct(@Body() payload: any) {
        return {
            message: 'Acción de crear',
            payload,
        };
    }

    //Patch se usa para actualizar parcialmente, pero generalmente
    //se usa put para actualizar completa o parcialmente
    @Put(':id')
    updateProduct(@Param('id') id: number, @Body() payload: any) {
        return {
            id,
            message: `Product with id ${id} has been updated`,
            payload,
        };
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: number) {
        return {
            id,
            message: `Product with id ${id} has been deleted`,
        };
    }
}

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
    // ParseIntPipe,
} from '@nestjs/common';

import { Response } from 'express';
import { ParseIntPipe } from '../../common/parse-int.pipe';

import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './products.dtos';

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
    //Comentado porque choca con la ruta de query

    //con solo decirle de qué tipo es, nest ya sabe que tiene que crear la instancia del servicio
    constructor(private productsService: ProductsService) {}

    @Get('filter')
    getProductFilter() {
        return {
            message: `Yo soy un filtro`,
        };
    }

    @Get(':id')
    @HttpCode(HttpStatus.ACCEPTED) //Definir un httpcode personalizado
    // getProduct(@Res() response: Response) al usar res le quitas a nest la posibilidad de resolver usando solo return
    getProduct(@Param('id', ParseIntPipe) id: number) {
        //El pipe nos asegura que va a ser un número al final

        // response.status(200).send({
        //     message: `product ${params.id}`,
        // });
        return this.productsService.findOne(id); //con el + lo convierte a número
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
        // return {
        //     message: `Product from brand ${brand} with limit=${limit}, offset=${offset}`,
        //     limit,
        //     offset,
        //     brand,
        // };
        return this.productsService.findAll();
    }

    //Se puede especificar cada elemento del body, pero siendo que puede
    //haber muchos deja de ser conveniente
    //@Body('name') name: string, @Body('price') price: string (JAMAS ENVIES PRICE DESDE CLIENTEEEE)
    @Post()
    createProduct(@Body() payload: CreateProductDto) {
        // return {
        //     message: 'Acción de crear',
        //     payload,
        // };

        return this.productsService.create(payload);
    }

    //Patch se usa para actualizar parcialmente, pero generalmente
    //se usa put para actualizar completa o parcialmente
    @Put(':id')
    updateProduct(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: UpdateProductDto,
    ) {
        // return {
        //     id,
        //     message: `Product with id ${id} has been updated`,
        //     payload,
        // };

        return this.productsService.update(+id, payload);
    }

    @Delete(':id')
    deleteProduct(@Param('id', ParseIntPipe) id: number) {
        return {
            id,
            message: `Product with id ${id} has been deleted`,
        };
    }
}

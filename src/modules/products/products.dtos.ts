import {
    IsString,
    IsNumber,
    IsUrl,
    IsNotEmpty,
    IsPositive,
} from 'class-validator';
// Agrega la opción de opcional al dto base
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
    //Sirve en tiempo de desarrollo, evita que el desarrollador
    //cometa errores al programar, por ejemplo, muestra un error si
    //en algun momento el desarrollador quiere cambiar una propiedad
    //que es de solo lectura

    //En ejecución no realiza la validación como tal
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive({ message: 'Price should be positive' }) //Mensajes personalizados
    readonly price: number;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly stock: number;

    @IsUrl()
    @IsNotEmpty()
    readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

// export class UpdateProductDto {
//Cómo son opcionales agregamos el ?
// readonly name?: string;
// }

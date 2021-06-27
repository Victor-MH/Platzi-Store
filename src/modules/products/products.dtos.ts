export class CreateProductDto {
    //Sirve en tiempo de desarrollo, evita que el desarrollador
    //cometa errores al programar, por ejemplo, muestra un error si
    //en algun momento el desarrollador quiere cambiar una propiedad
    //que es de solo lectura

    //En ejecución no realiza la validación como tal
    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly stock: number;
    readonly image: string;
}

export class UpdateProductDto {
    //Cómo son opcionales agregamos el ?
    readonly name?: string;
    readonly description?: string;
    readonly price?: number;
    readonly stock?: number;
    readonly image?: string;
}

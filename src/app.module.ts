import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './modules/products/products.controller';
import { CategoriesController } from './modules/categories/categories.controller';
import { OrdersController } from './modules/orders/orders.controller';
import { UsersController } from './modules/users/users.controller';
import { CustomersController } from './modules/customers/customers.controller';
import { BrandsController } from './modules/brands/brands.controller';
import { ProductsService } from './modules/products/products.service';
import { BrandsService } from './modules/brands/brands.service';
import { CategoriesService } from './modules/categories/categories.service';
import { CustomersService } from './modules/customers/customers.service';
import { OrdersService } from './modules/orders/orders.service';
import { UsersService } from './modules/users/users.service';

@Module({
    imports: [],
    controllers: [
        AppController,
        ProductsController,
        CategoriesController,
        OrdersController,
        UsersController,
        CustomersController,
        BrandsController,
    ],
    providers: [AppService, ProductsService, BrandsService, CategoriesService, CustomersService, OrdersService, UsersService],
})
export class AppModule {}

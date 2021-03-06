import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogGuard } from './guards/log.guard';
import { LoginService } from './service/login.service';
import { ProductsService } from './service/products.service';
import { OrderService } from './service/orders.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './service/users.service';

@NgModule({
    imports: [CommonModule, HttpClientModule],
    providers: [LogGuard, LoginService, ProductsService, OrderService , UsersService]
})
export class GuardModule { }

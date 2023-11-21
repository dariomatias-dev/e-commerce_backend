import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-guard.guard';
import { PrismaModule } from './prisma/prisma.module';

import { BusinessAccountModule } from './resources/business-account/business-account.module';
import { CartModule } from './resources/cart/cart.module';
import { CategoryModule } from './resources/category/category.module';
import { OrderModule } from './resources/order/order.module';
import { PersonalAccountModule } from './resources/personal-account/personal-account.module';
import { ProductModule } from './resources/product/product.module';
import { WishlistModule } from './resources/wishlist/wishlist.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    ProductModule,
    CategoryModule,
    CartModule,
    WishlistModule,
    OrderModule,
    PersonalAccountModule,
    BusinessAccountModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}

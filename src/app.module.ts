import { Module } from '@nestjs/common';

import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { BusinessAccountModule } from './business-account/business-account.module';
import { CartModule } from './cart/cart.module';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';
import { PersonalAccountModule } from './personal-account/personal-account.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { WishlistModule } from './wishlist/wishlist.module';

import { JwtAuthGuard } from './auth/guards/jwt-guard.guard';

@Module({
  imports: [
    PrismaModule,
    ProductModule,
    CategoryModule,
    CartModule,
    WishlistModule,
    OrderModule,
    AuthModule,
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

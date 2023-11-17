import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';

import { ProductModule } from './product/product.module';

import { CategoryModule } from './category/category.module';

import { CartModule } from './cart/cart.module';

import { WishlistModule } from './wishlist/wishlist.module';

import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { PhysicalPersonUserModule } from './physical-person-user/physical-person-user.module';

@Module({
  imports: [
    PrismaModule,
    ProductModule,
    CategoryModule,
    CartModule,
    WishlistModule,
    OrderModule,
    AuthModule,
    PhysicalPersonUserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { PrismaClient } from '@prisma/client';
import { businessAccountSeed } from './business-account.seed';
import { cartSeed } from './cart.seed';
import { categorySeed } from './category.seed';
import { orderSeed } from './order.seed';
import { personalAccountSeed } from './personal-account.seed';
import { productSeed } from './product.seed';
import { wishlistSeed } from './wishlist.seed';

const prisma = new PrismaClient();

async function run() {
  await personalAccountSeed(prisma);
  await businessAccountSeed(prisma);
  await wishlistSeed(prisma);
  await cartSeed(prisma);
  await categorySeed(prisma);
  await productSeed(prisma);
  await orderSeed(prisma);
}

run()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

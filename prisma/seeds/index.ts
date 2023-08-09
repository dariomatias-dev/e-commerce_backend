import { PrismaClient } from '@prisma/client';
import seedProducts from './products.seed';
import seedPhysicalPersonUsers from './physicalPersonUsers.seed';
import seedLegalPersonUsers from './legalPersonUsers.seed';
import seedWishlists from './wishlists.seed';
import seedCarts from './carts.seed';
import seedCategories from './categories.seed';
import seedOrders from './orders.seed';

const prisma = new PrismaClient();

async function run() {
  await seedPhysicalPersonUsers(prisma);
  await seedLegalPersonUsers(prisma);
  await seedWishlists(prisma);
  await seedCarts(prisma);
  await seedCategories(prisma);
  await seedProducts(prisma);
  await seedOrders(prisma);
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

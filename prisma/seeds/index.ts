import { PrismaClient } from '@prisma/client';
import seedProducts from './products.seed';

const prisma = new PrismaClient();

async function run() {
  await seedProducts(prisma);
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

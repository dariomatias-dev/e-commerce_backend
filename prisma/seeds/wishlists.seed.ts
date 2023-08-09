import { PrismaClient } from '@prisma/client';

const seedWishlists = async (prisma: PrismaClient) => {
  await prisma.wishlists.deleteMany();

  await Promise.all([
    prisma.wishlists.create({
      data: {
        userId: '57e99e52-753e-4da7-8a67-a6286edd2ee4',
        productIds: [],
      },
    }),
    prisma.wishlists.create({
      data: {
        userId: 'f8a5ded4-9247-44c2-a794-15aa5ff6fda1',
        productIds: [],
      },
    }),
  ]);
};

export default seedWishlists;

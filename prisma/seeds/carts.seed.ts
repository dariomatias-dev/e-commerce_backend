import { PrismaClient } from '@prisma/client';

const seedCarts = async (prisma: PrismaClient) => {
  await prisma.carts.deleteMany();

  await Promise.all([
    prisma.carts.create({
      data: {
        userId: '57e99e52-753e-4da7-8a67-a6286edd2ee4',
        productIds: [],
      },
    }),
    prisma.carts.create({
      data: {
        userId: 'f8a5ded4-9247-44c2-a794-15aa5ff6fda1',
        productIds: [
          'd0fb1d0d-60d9-41b8-8613-c24eea6abba9',
          '38329235-492e-462a-b3cd-02d4cb0622d7',
        ],
      },
    }),
  ]);
};

export default seedCarts;

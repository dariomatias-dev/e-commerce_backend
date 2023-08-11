import { PrismaClient } from '@prisma/client';

const seedOrders = async (prisma: PrismaClient) => {
  await prisma.orders.deleteMany();

  await Promise.all([
    prisma.orders.create({
      data: {
        userId: '8ae64846-3e2a-4eec-b0af-d9dbc108833e',
        orderItems: {
          create: [
            {
              productId: '7117ef73-4a0b-450f-9cab-5b5652bce503',
              quantity: 1,
              unitPrice: 1395.99,
            },
          ],
        },
        totalAmount: 1395.99,
      },
    }),
    prisma.orders.create({
      data: {
        userId: 'aad40577-43ce-4b0d-b845-1c2e1653e338',
        orderItems: {
          create: [
            {
              productId: 'c52075b7-482f-4e82-91c1-896002108b96',
              quantity: 1,
              unitPrice: 1245.99,
            },
            {
              productId: '8e0694b3-efc7-4654-b8f9-fef45be3417f',
              quantity: 1,
              unitPrice: 495.99,
            },
          ],
        },
        totalAmount: 1741.98,
      },
    }),
    prisma.orders.create({
      data: {
        userId: '475cd22c-9d5d-4202-9b95-f2a6040b96dd',
        orderItems: {
          create: [
            {
              productId: '1a1bb003-7234-4f51-87a8-b126dffafa79',
              quantity: 3,
              unitPrice: 199.99,
            },
            {
              productId: '29b1dbcd-d70a-4fa6-ac5c-1bd5209442a6',
              quantity: 1,
              unitPrice: 745.99,
            },
            {
              productId: '461764ae-a7e1-4fed-9401-67568e19588a',
              quantity: 2,
              unitPrice: 249.5,
            },
          ],
        },
        totalAmount: 3190.9,
      },
    }),
    prisma.orders.create({
      data: {
        userId: '765195f4-c29e-41d9-88be-e3f3c04bac5d',
        orderItems: {
          create: [
            {
              productId: '32bbd300-5398-4837-a26a-fef408e0c5be',
              quantity: 1,
              unitPrice: 7495.99,
            },
            {
              productId: '5d919cc5-2cd6-4b2e-aa04-409f212d6390',
              quantity: 1,
              unitPrice: 3495.99,
            },
          ],
        },
        totalAmount: 10991.98,
      },
    }),
    prisma.orders.create({
      data: {
        userId: 'c5d65cfa-e2fb-4d43-a550-46a29bcce265',
        orderItems: {
          create: [
            {
              productId: '59485b51-cb15-4d03-810b-4afad21fb81a',
              quantity: 1,
              unitPrice: 1395.99,
            },
            {
              productId: '63354a45-b32f-4f0b-96f4-b3393c2ac75a',
              quantity: 2,
              unitPrice: 349.99,
            },
          ],
        },
        totalAmount: 2095.97,
      },
    }),
    prisma.orders.create({
      data: {
        userId: 'c024b2c8-41dd-43a7-b366-93fca49ce8e5',
        orderItems: {
          create: [
            {
              productId: '0c03de01-7719-4403-9021-a330da5934f5',
              quantity: 1,
              unitPrice: 2995.99,
            },
            {
              productId: 'd0fb1d0d-60d9-41b8-8613-c24eea6abba9',
              quantity: 1,
              unitPrice: 17495.99,
            },
          ],
        },
        totalAmount: 20491.98,
      },
    }),
    prisma.orders.create({
      data: {
        userId: 'df942326-5cfc-48eb-adc9-ad269d91974e',
        orderItems: {
          create: [
            {
              productId: '29b1dbcd-d70a-4fa6-ac5c-1bd5209442a6',
              quantity: 1,
              unitPrice: 745.99,
            },
          ],
        },
        totalAmount: 745.99,
      },
    }),
    prisma.orders.create({
      data: {
        userId: '475cd22c-9d5d-4202-9b95-f2a6040b96dd',
        orderItems: {
          create: [
            {
              productId: '94aa82bf-ded3-4e80-90ad-2b445c72ecd8',
              quantity: 4,
              unitPrice: 399.99,
            },
          ],
        },
        totalAmount: 1599.96,
      },
    }),
    prisma.orders.create({
      data: {
        userId: '8edfc04b-d884-45eb-b833-81c32d143bc6',
        orderItems: {
          create: [
            {
              productId: 'd0fb1d0d-60d9-41b8-8613-c24eea6abba9',
              quantity: 1,
              unitPrice: 17495.99,
            },
            {
              productId: '0888b281-35b0-4c73-8a33-b8db1d8966c1',
              quantity: 1,
              unitPrice: 4495.49,
            },
            {
              productId: '38329235-492e-462a-b3cd-02d4cb0622d7',
              quantity: 3,
              unitPrice: 949.95,
            },
          ],
        },
        totalAmount: 24840.84,
      },
    }),
    prisma.orders.create({
      data: {
        userId: '28dd3e7b-6e4e-4f29-8ecf-7045574472a3',
        orderItems: {
          create: [
            {
              productId: '78bd925e-f9dd-4ef4-b4f9-b7fc91788d1b',
              quantity: 1,
              unitPrice: 445.99,
            },
          ],
        },
        totalAmount: 445.99,
      },
    }),
    prisma.orders.create({
      data: {
        userId: '2bc5ff61-eed1-4076-865b-1884a9f819b9',
        orderItems: {
          create: {
            productId: '78bd925e-f9dd-4ef4-b4f9-b7fc91788d1b',
            quantity: 1,
            unitPrice: 445.99,
          },
        },
        totalAmount: 445.99,
      },
    }),
    prisma.orders.create({
      data: {
        userId: 'f0d33f1f-dabe-4389-b16f-fb4e59812456',
        orderItems: {
          create: {
            productId: 'f90ab79a-b272-4e19-8980-4dc69a6358ce',
            quantity: 1,
            unitPrice: 495.99,
          },
        },
        totalAmount: 495.99,
      },
    }),
    prisma.orders.create({
      data: {
        userId: '0901f7e2-f993-4f60-ad97-a6ea912632bd',
        orderItems: {
          create: [
            {
              productId: 'b06b92b2-c505-4bb0-979f-11b2d2bc0cf7',
              quantity: 1,
              unitPrice: 895.95,
            },
            {
              productId: 'cad21368-3bb0-43dc-91e6-8c1b6d675762',
              quantity: 1,
              unitPrice: 1495.99,
            },
          ],
        },
        totalAmount: 2391.94,
      },
    }),
    prisma.orders.create({
      data: {
        userId: '11a4a5b3-d36b-4f7b-a26f-0d454f50e405',
        orderItems: {
          create: {
            productId: '1a1bb003-7234-4f51-87a8-b126dffafa79',
            quantity: 2,
            unitPrice: 199.99,
          },
        },
        totalAmount: 199.99,
      },
    }),
    prisma.orders.create({
      data: {
        userId: '2276f35e-0b6b-4e96-8f5e-799c53260e34',
        orderItems: {
          create: [
            {
              productId: '461764ae-a7e1-4fed-9401-67568e19588a',
              quantity: 2,
              unitPrice: 249.5,
            },
            {
              productId: '7dde05da-62b3-4254-ab72-1b78863a06e1',
              quantity: 1,
              unitPrice: 3495.99,
            },
          ],
        },
        totalAmount: 3994.99,
      },
    }),
    prisma.orders.create({
      data: {
        userId: '8edfc04b-d884-45eb-b833-81c32d143bc6',
        orderItems: {
          create: {
            productId: 'c720ab84-8a6e-422e-8948-024542914835',
            quantity: 1,
            unitPrice: 395.99,
          },
        },
        totalAmount: 395.99,
      },
    }),
    prisma.orders.create({
      data: {
        userId: '36ef110e-100c-4fa8-b609-700df539caf4',
        orderItems: {
          create: {
            productId: 'f0eedf9d-0be5-469b-9ebe-3df46fb65cd5',
            quantity: 1,
            unitPrice: 845.99,
          },
        },
        totalAmount: 845.99,
      },
    }),
    prisma.orders.create({
      data: {
        userId: 'e82df5d9-1458-43ed-bbe6-9440806e8950',
        orderItems: {
          create: {
            productId: 'cad21368-3bb0-43dc-91e6-8c1b6d675762',
            quantity: 1,
            unitPrice: 1495.99,
          },
        },
        totalAmount: 1495.99,
      },
    }),
    prisma.orders.create({
      data: {
        userId: 'b964ba88-c9e5-48a4-9b27-7d92544c1748',
        orderItems: {
          create: {
            productId: '3fac17d5-383f-43fc-a5bd-ae1f780c4d51',
            quantity: 1,
            unitPrice: 1245.99,
          },
        },
        totalAmount: 1245.99,
      },
    }),
    prisma.orders.create({
      data: {
        userId: '8edfc04b-d884-45eb-b833-81c32d143bc6',
        orderItems: {
          create: {
            productId: '59485b51-cb15-4d03-810b-4afad21fb81a',
            quantity: 1,
            unitPrice: 1395.99,
          },
        },
        totalAmount: 1395.99,
      },
    }),
  ]);
};

export default seedOrders;

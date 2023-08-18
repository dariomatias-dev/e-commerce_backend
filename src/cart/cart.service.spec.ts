import { Test, TestingModule } from '@nestjs/testing';

import { CartService } from './cart.service';

import { PrismaService } from '../prisma/prisma.service';

describe('CartService', () => {
  let service: CartService;

  const prismaMock = {
    carts: {
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  const cart = {
    userId: 'f8a5ded4-9247-44c2-a794-15aa5ff6fda1',
    productIds: [
      'd0fb1d0d-60d9-41b8-8613-c24eea6abba9',
      '38329235-492e-462a-b3cd-02d4cb0622d7',
    ],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CartService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get<CartService>(CartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    it("should return the products from the user's cart ID", async () => {
      prismaMock.carts.findUnique.mockResolvedValue(cart);

      const result = await service.findOne(cart.userId);

      expect(result).toEqual(cart.productIds);
      expect(prismaMock.carts.findUnique).toHaveBeenCalledWith({
        where: { userId: cart.userId },
      });
      expect(prismaMock.carts.findUnique).toHaveBeenCalledTimes(1);
    });
  });
});

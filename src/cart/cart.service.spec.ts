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

  const cartOne = {
    userId: 'f8a5ded4-9247-44c2-a794-15aa5ff6fda1',
    productIds: [
      'd0fb1d0d-60d9-41b8-8613-c24eea6abba9',
      '38329235-492e-462a-b3cd-02d4cb0622d7',
    ],
  };

  const cartTwo = {
    userId: '57e99e52-753e-4da7-8a67-a6286edd2ee4',
    productIds: [
      '0c03de01-7719-4403-9021-a330da5934f5',
      '7dde05da-62b3-4254-ab72-1b78863a06e1',
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
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    it('should return the products from the cart ID of the first user', async () => {
      prismaMock.carts.findUnique.mockResolvedValue(cartOne);

      const result = await service.findOne(cartOne.userId);

      expect(result).toEqual(cartOne.productIds);
      expect(prismaMock.carts.findUnique).toHaveBeenCalledWith({
        where: {
          userId: cartOne.userId,
        },
      });
      expect(prismaMock.carts.findUnique).toHaveBeenCalledTimes(1);
    });

    it("should return an empty array from the first user's cart", async () => {
      const emptyCart = {
        ...cartOne,
        productIds: [],
      };
      prismaMock.carts.findUnique.mockResolvedValue(emptyCart);

      const result = await service.findOne(emptyCart.userId);

      expect(result).toEqual([]);
      expect(prismaMock.carts.findUnique).toHaveBeenCalledWith({
        where: {
          userId: cartOne.userId,
        },
      });
      expect(prismaMock.carts.findUnique).toHaveBeenCalledTimes(1);
    });

    it('should return the products from the cart ID of the second user', async () => {
      prismaMock.carts.findUnique.mockResolvedValue(cartTwo);

      const result = await service.findOne(cartTwo.userId);

      expect(result).toEqual(cartTwo.productIds);
      expect(prismaMock.carts.findUnique).toHaveBeenCalledWith({
        where: {
          userId: cartTwo.userId,
        },
      });
      expect(prismaMock.carts.findUnique).toHaveBeenCalledTimes(1);
    });

    it("should return an empty array from the first user's cart", async () => {
      const emptyCart = {
        ...cartTwo,
        productIds: [],
      };
      prismaMock.carts.findUnique.mockResolvedValue(emptyCart);

      const result = await service.findOne(emptyCart.userId);

      expect(result).toEqual(emptyCart.productIds);
      expect(prismaMock.carts.findUnique).toHaveBeenCalledWith({
        where: {
          userId: emptyCart.userId,
        },
      });
      expect(prismaMock.carts.findUnique).toHaveBeenCalledTimes(1);
    });
  });

  describe('update', () => {
    it('should return the ids of the products from the record that was updated based on the ID', async () => {
      const updatedField = { productIds: [cartOne.productIds[0]] };
      const updatedCart = {
        ...cartOne,
        updatedField,
      };
      prismaMock.carts.update.mockResolvedValue(updatedCart);

      const result = await service.update(cartOne.userId, updatedField);

      expect(result).toEqual(updatedCart.productIds);
      expect(prismaMock.carts.update).toHaveBeenCalledWith({
        where: {
          userId: updatedCart.userId,
        },
        data: updatedField,
      });
      expect(prismaMock.carts.update).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array corresponding to the ids of the products in the record that was updated based on the ID', async () => {
      const updatedField = { productIds: [] };
      const emptyCartOne = {
        ...cartOne,
        updatedField,
      };
      prismaMock.carts.update.mockResolvedValue(emptyCartOne);

      const result = await service.update(emptyCartOne.userId, updatedField);

      expect(result).toEqual(emptyCartOne.productIds);
      expect(prismaMock.carts.update).toHaveBeenCalledWith({
        where: {
          userId: emptyCartOne.userId,
        },
        data: updatedField,
      });
      expect(prismaMock.carts.update).toHaveBeenCalledTimes(1);
    });
  });

  describe('remove', () => {
    it('should return deleted cart data', async () => {
      prismaMock.carts.delete.mockResolvedValue(cartOne);

      const result = await service.remove(cartOne.userId);

      expect(result).toEqual(cartOne);
      expect(prismaMock.carts.delete).toHaveBeenCalledWith({
        where: {
          userId: cartOne.userId,
        },
      });
      expect(prismaMock.carts.delete).toHaveBeenCalledTimes(1);
    });
  });
});

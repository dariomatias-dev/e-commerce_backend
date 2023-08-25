import { Test, TestingModule } from '@nestjs/testing';

import { CartController } from './cart.controller';

import { CartService } from './cart.service';

describe('CartController', () => {
  let controller: CartController;

  const serviceMock = {
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
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
      controllers: [CartController],
      providers: [
        CartService,
        {
          provide: CartService,
          useValue: serviceMock,
        },
      ],
    }).compile();

    controller = module.get<CartController>(CartController);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findOne', () => {
    it("should return the products from the user's cart ID", async () => {
      serviceMock.findOne.mockResolvedValue(cartOne.productIds);
      const params = { id: cartOne.userId };

      const result = await controller.findOne(params);

      expect(result).toEqual(cartOne.productIds);
      expect(serviceMock.findOne).toHaveBeenCalledWith(params.id);
      expect(serviceMock.findOne).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array', async () => {
      serviceMock.findOne.mockResolvedValue([]);
      const params = { id: cartOne.userId };

      const result = await controller.findOne(params);

      expect(result).toEqual([]);
      expect(serviceMock.findOne).toHaveBeenCalledWith(params.id);
      expect(serviceMock.findOne).toHaveBeenCalledTimes(1);
    });

    it('', async () => {
      serviceMock.findOne.mockResolvedValue(cartTwo.productIds);
      const params = { id: cartTwo.userId };

      const result = await controller.findOne(params);

      expect(result).toEqual(cartTwo.productIds);
      expect(serviceMock.findOne).toHaveBeenCalledWith(params.id);
      expect(serviceMock.findOne).toHaveBeenCalledTimes(1);
    });

    it('', async () => {
      serviceMock.findOne.mockResolvedValue([]);
      const params = { id: cartTwo.userId };

      const result = await controller.findOne(params);

      expect(result).toEqual([]);
      expect(serviceMock.findOne).toHaveBeenCalledWith(params.id);
      expect(serviceMock.findOne).toHaveBeenCalledTimes(1);
    });
  });

  describe('update', () => {
    it('should return the ids of the products in the record that was updated based on the ID of the first cart', async () => {
      const updatedField = { productIds: [cartOne.productIds[0]] };
      serviceMock.update.mockResolvedValue(updatedField);
      const params = { id: cartOne.userId };

      const result = await controller.update(params, updatedField);

      expect(result).toEqual(updatedField);
      expect(serviceMock.update).toHaveBeenCalledWith(params.id, updatedField);
      expect(serviceMock.update).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array corresponding to the ids of the products in the record that were updated based on the first cart ID', async () => {
      const updatedField = { productIds: [] };
      serviceMock.update.mockResolvedValue(updatedField);
      const params = { id: cartOne.userId };

      const result = await controller.update(params, updatedField);

      expect(result).toEqual(updatedField);
      expect(serviceMock.update).toHaveBeenCalledWith(params.id, updatedField);
      expect(serviceMock.update).toHaveBeenCalledTimes(1);
    });

    it('should return the ids of the products in the record that was updated based on the ID of the second cart', async () => {
      const updatedField = { productIds: [cartTwo.productIds[0]] };
      serviceMock.update.mockResolvedValue(updatedField);
      const params = { id: cartTwo.userId };

      const result = await controller.update(params, updatedField);

      expect(result).toEqual(updatedField);
      expect(serviceMock.update).toHaveBeenCalledWith(params.id, updatedField);
      expect(serviceMock.update).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array corresponding to the ids of the products in the record that were updated based on the second cart id', async () => {
      const updatedField = { productIds: [] };
      serviceMock.update.mockResolvedValue(updatedField);
      const params = { id: cartTwo.userId };

      const result = await controller.update(params, updatedField);

      expect(result).toEqual(updatedField);
      expect(serviceMock.update).toHaveBeenCalledWith(params.id, updatedField);
      expect(serviceMock.update).toHaveBeenCalledTimes(1);
    });
  });

  describe('remove', () => {
    it('should return deleted cart data', async () => {
      serviceMock.remove.mockResolvedValue(cartOne);
      const params = { id: cartOne.userId };

      const result = await controller.remove(params);

      expect(result).toEqual(cartOne);
      expect(serviceMock.remove).toHaveBeenCalledWith(params.id);
      expect(serviceMock.remove).toHaveBeenCalledTimes(1);
    });

    it('should return a wishlist with an empty array in the productIds field for the second user', async () => {
      const emptyCartOne = {
        ...cartOne,
        productIds: [],
      };
      serviceMock.remove.mockResolvedValue(emptyCartOne);
      const params = { id: emptyCartOne.userId };

      const result = await controller.remove(params);

      expect(result).toEqual(emptyCartOne);
      expect(serviceMock.remove).toHaveBeenCalledWith(params.id);
      expect(serviceMock.remove).toHaveBeenCalledTimes(1);
    });
  });
});

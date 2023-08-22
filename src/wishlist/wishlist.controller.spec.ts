import { Test, TestingModule } from '@nestjs/testing';

import { WishlistController } from './wishlist.controller';

import { WishlistService } from './wishlist.service';

describe('WishlistController', () => {
  let controller: WishlistController;

  const serviceMock = {
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  const wishlist = {
    userId: 'f8a5ded4-9247-44c2-a794-15aa5ff6fda1',
    productIds: [
      'd0fb1d0d-60d9-41b8-8613-c24eea6abba9',
      '38329235-492e-462a-b3cd-02d4cb0622d7',
    ],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WishlistController],
      providers: [
        WishlistService,
        {
          provide: WishlistService,
          useValue: serviceMock,
        },
      ],
    }).compile();

    controller = module.get<WishlistController>(WishlistController);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findOne', () => {
    it("should return the products from the user's wishlist ID", async () => {
      serviceMock.findOne.mockResolvedValue(wishlist.productIds);
      const params = { id: wishlist.userId };

      const result = await controller.findOne(params);

      expect(result).toEqual(wishlist.productIds);
      expect(serviceMock.findOne).toHaveBeenCalledWith(wishlist.userId);
      expect(serviceMock.findOne).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array', async () => {
      serviceMock.findOne.mockResolvedValue([]);
      const params = { id: wishlist.userId };

      const result = await controller.findOne(params);

      expect(result).toEqual([]);
      expect(serviceMock.findOne).toHaveBeenCalledWith(wishlist.userId);
      expect(serviceMock.findOne).toHaveBeenCalledTimes(1);
    });
  });

  describe('update', () => {
    it('should return the ids of the products from the record that was updated based on the ID', async () => {
      const updatedField = {
        productIds: [wishlist.productIds[0]],
      };
      serviceMock.update.mockResolvedValue(updatedField);
      const params = { id: wishlist.userId };

      const result = await controller.update(params, updatedField);

      expect(result).toEqual(updatedField);
      expect(serviceMock.update).toHaveBeenCalledWith(
        wishlist.userId,
        updatedField,
      );
      expect(serviceMock.update).toHaveBeenCalledTimes(1);
    });
  });

  describe('remove', () => {
    it('should return deleted cart data', async () => {
      serviceMock.remove.mockResolvedValue(wishlist);
      const params = { id: wishlist.userId };

      const result = await controller.remove(params);

      expect(result).toEqual(wishlist);
      expect(serviceMock.remove).toHaveBeenCalledWith(wishlist.userId);
      expect(serviceMock.remove).toHaveBeenCalledTimes(1);
    });
  });
});

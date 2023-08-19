import { Test, TestingModule } from '@nestjs/testing';
import { Prisma } from '@prisma/client';

import { CategoryController } from './category.controller';

import { CategoryService } from './category.service';

describe('CategoryController', () => {
  let controller: CategoryController;

  const serviceMock = {
    create: jest.fn(),
    findOne: jest.fn(),
    findAll: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  const categoryOne: Prisma.CategoriesCreateInput = {
    id: 'bf565cbb-1f85-49c4-9292-ccff1d2bbe3e',
    name: 'Processadores',
  };

  const categoryTwo: Prisma.CategoriesCreateInput = {
    id: 'f5f513f6-4172-4a00-87a0-d03d8bae2fa2',
    name: 'Placas de Vídeo',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [
        {
          provide: CategoryService,
          useValue: serviceMock,
        },
      ],
    }).compile();

    controller = module.get<CategoryController>(CategoryController);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should return the created category', async () => {
      serviceMock.create.mockResolvedValue(categoryOne);

      const result = await controller.create(categoryOne);

      expect(result).toEqual(categoryOne);
      expect(serviceMock.create).toHaveBeenCalledWith(categoryOne);
      expect(serviceMock.create).toHaveBeenCalledTimes(1);
    });
  });
});

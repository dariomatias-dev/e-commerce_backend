import { Test, TestingModule } from '@nestjs/testing';

import { PhysicalPersonUserController } from './physical-person-user.controller';
import { PhysicalPersonUserService } from './physical-person-user.service';

describe('PhysicalPersonUserController', () => {
  let controller: PhysicalPersonUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhysicalPersonUserController],
      providers: [PhysicalPersonUserService],
    }).compile();

    controller = module.get<PhysicalPersonUserController>(
      PhysicalPersonUserController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

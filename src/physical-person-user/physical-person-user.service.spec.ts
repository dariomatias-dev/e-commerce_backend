import { Test, TestingModule } from '@nestjs/testing';

import { PhysicalPersonUserService } from './physical-person-user.service';

describe('PhysicalPersonUserService', () => {
  let service: PhysicalPersonUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhysicalPersonUserService],
    }).compile();

    service = module.get<PhysicalPersonUserService>(PhysicalPersonUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

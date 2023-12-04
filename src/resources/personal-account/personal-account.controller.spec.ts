import { Test, TestingModule } from '@nestjs/testing';

import { PersonalAccountController } from './personal-account.controller';
import { PersonalAccountService } from './personal-account.service';

describe('PersonalAccountController', () => {
  let controller: PersonalAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalAccountController],
      providers: [PersonalAccountService],
    }).compile();

    controller = module.get<PersonalAccountController>(
      PersonalAccountController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

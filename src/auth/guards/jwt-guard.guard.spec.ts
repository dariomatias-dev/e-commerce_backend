import { JwtAuthRolesGuard } from './jwt-guard.guard';

describe('RolesGuard', () => {
  it('should be defined', () => {
    expect(new JwtAuthRolesGuard()).toBeDefined();
  });
});

import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users } from './users.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
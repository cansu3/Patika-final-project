import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users } from './users.model';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../auth/auth.guard'; // Bu yolu kendi projenize göre güncelleyin

@Module({
  controllers: [UsersController],
  providers: [UsersService , {
    provide: APP_GUARD,
    useClass: AuthGuard,
  },],
})
export class UsersModule {}
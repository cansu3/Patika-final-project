import { Module } from '@nestjs/common';
import { FactoriesController } from './factories.controller';
import { FactoriesService } from './factories.service';
import { Factory } from './factories.model';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../auth/auth.guard'; // Bu yolu kendi projenize göre güncelleyin

@Module({
  controllers: [FactoriesController],
  providers: [FactoriesService ,    {
    provide: APP_GUARD,
    useClass: AuthGuard,
  },],
})
export class FactoriesModule {}
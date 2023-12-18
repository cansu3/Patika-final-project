import { Module } from '@nestjs/common';
import { FactoryDetailsController } from './factory-details.controller';
import { FactoryDetailsService } from './factory-details.service';
import { FactoryDetail } from './factory-details.model';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../auth/auth.guard'; // Bu yolu kendi projenize göre güncelleyin

@Module({
  controllers: [FactoryDetailsController],
  providers: [FactoryDetailsService, {
    provide: APP_GUARD,
    useClass: AuthGuard,
  },],
})
export class FactoryDetailsModule {}
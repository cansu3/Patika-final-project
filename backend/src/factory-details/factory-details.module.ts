import { Module } from '@nestjs/common';
import { FactoryDetailsController } from './factory-details.controller';
import { FactoryDetailsService } from './factory-details.service';
import { FactoryDetail } from './factory-details.model';

@Module({
  controllers: [FactoryDetailsController],
  providers: [FactoryDetailsService],
})
export class FactoryDetailsModule {}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FactoriesModule } from './factories/factories.module';
import { FactoryDetailsModule } from './factory-details/factory-details.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [FactoriesModule, FactoryDetailsModule,UsersModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: 'http://localhost:3000', // İzin verilen origin (köken) adresi
    methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'], // İzin verilen HTTP metotları
    allowedHeaders: ['Content-Type', 'Authorization'], // İzin verilen başlıklar
  };

  app.enableCors(corsOptions);

  await app.listen(3001);

}
bootstrap();

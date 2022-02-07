import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ItemModule } from './items/items.module';

async function bootstrap() {
  const app = await NestFactory.create(ItemModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(process.env.PORT || 4000);
}
bootstrap();

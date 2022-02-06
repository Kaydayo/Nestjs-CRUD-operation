import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ItemModule } from './items/items.module';

async function bootstrap() {
  const app = await NestFactory.create(ItemModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();

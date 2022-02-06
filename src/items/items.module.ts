import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import config from '../../ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EachItem } from './items.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([EachItem]),
  ],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemModule {}

"
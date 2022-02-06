import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UpdateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { EachItem } from './items.entity';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  getAllItem(): Promise<EachItem[]> {
    return this.itemsService.getAllItems();
  }

  @Get(':id')
  async getOneItem(@Param('id') id: number): Promise<EachItem> {
    return await this.itemsService.getOneById(id);
  }

  @Post()
  createNewItem(@Body() createItemDto: UpdateItemDto): Promise<EachItem> {
    return this.itemsService.createAnItem(createItemDto);
  }

  @Delete(':id')
  deleteItem(@Param('id') id: number): Promise<EachItem> {
    return this.itemsService.deleteItem(id);
  }

  @Put(':id')
  updateItem(
    @Body() updateItemDto: UpdateItemDto,
    @Param('id') id: number,
  ): Promise<any> {
    return this.itemsService.updateItem(id, updateItemDto);
  }
}

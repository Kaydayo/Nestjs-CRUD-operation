import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './interfaces/item.interface';
import { EachItem } from './items.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(EachItem) private itemsRepository: Repository<EachItem>,
  ) {}

  getAllItems(): Promise<EachItem[]> {
    return this.itemsRepository.find();
  }

  async getOneById(id: number): Promise<EachItem> {
    try {
      const anItem = await this.itemsRepository.findOneOrFail(id);
      return anItem;
    } catch (error) {
      throw error;
    }
  }

  createAnItem(item: Item): Promise<EachItem> {
    const newUser = this.itemsRepository.create(item);
    return this.itemsRepository.save(newUser);
  }

  async updateItem(id: number, itemUpdate: Item) {
    console.log(itemUpdate);
    try {
      const data = await this.itemsRepository.update({ id }, itemUpdate);
      console.log(data.generatedMaps);
      return this.getOneById(id);
    } catch (e) {
      console.log(e);
    }

    return 'hello';
  }

  async deleteItem(id: number): Promise<EachItem> {
    const item = await this.getOneById(id);
    return this.itemsRepository.remove(item);
  }
}

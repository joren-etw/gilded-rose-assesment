import { Injectable } from '@nestjs/common';
import { Item } from '../models/item.model';

@Injectable()
export class UpdateItemService {
  constructor() {}

  handle(items: Item[]): Item[] {
    return items;
  }
}

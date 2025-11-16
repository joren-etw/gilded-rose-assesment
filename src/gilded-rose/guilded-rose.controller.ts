import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UpdateItemService } from './services/update-item.service';
import { Item } from './models/item.model';

@Controller()
export class GuildedRoseController {
  constructor(private readonly updateItemService: UpdateItemService) {}

  @MessagePattern('update-items')
  updateItems(items: Item[]) {
    return this.updateItemService.handle(items);
  }
}

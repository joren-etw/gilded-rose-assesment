import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UpdateItemService } from './services/update-item.service';
import { ItemDto } from './dtos/item.dto';
import { ValidatePayloadPipe } from './pipes/validate-payload.pipe';

@Controller()
export class GuildedRoseController {
  constructor(private readonly updateItemService: UpdateItemService) {}

  @MessagePattern('update-items')
  updateItems(@Payload(new ValidatePayloadPipe()) items: ItemDto[]) {
    return this.updateItemService.handle(items);
  }
}

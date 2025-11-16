import { Module } from '@nestjs/common';
import { UpdateItemService } from './services/update-item.service';

@Module({
  providers: [UpdateItemService],
})
export class GildedRoseModule {}

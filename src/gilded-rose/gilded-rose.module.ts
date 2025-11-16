import { Module } from '@nestjs/common';
import { UpdateItemService } from './services/update-item.service';
import { RulesProvider } from './services/rules/rules.provider';

@Module({
  providers: [UpdateItemService, ...RulesProvider],
})
export class GildedRoseModule {}

import { Module } from '@nestjs/common';
import { UpdateItemService } from './services/update-item.service';
import { RulesProvider } from './services/rules/rules.provider';
import { GuildedRoseController } from './guilded-rose.controller';

@Module({
  controllers: [GuildedRoseController],
  providers: [UpdateItemService, ...RulesProvider],
})
export class GildedRoseModule {}

import { Module } from '@nestjs/common';
import { GildedRoseModule } from './gilded-rose/gilded-rose.module';

@Module({
  imports: [GildedRoseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

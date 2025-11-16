import { Injectable } from '@nestjs/common';
import { RuleTemplate } from './rule-template';
import { Item } from '../../models/item.model';

@Injectable()
export class BackstagePassRule extends RuleTemplate {
  protected updateQuality(item: Item): void {
    if (item.sellIn < 0) {
      item.quality = 0;
      return;
    }

    if (item.sellIn <= 5) item.quality += 3;
    else if (item.sellIn <= 10) item.quality += 2;
    else item.quality += 1;
  }
}

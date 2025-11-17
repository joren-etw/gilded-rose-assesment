import { Injectable } from '@nestjs/common';
import { RuleAbstract } from './rule.abstract';
import { Item } from '../../models/item.model';

@Injectable()
export class BackstagePassRule extends RuleAbstract {
  protected updateQuality(item: Item): void {
    if (item.sellIn < 0) {
      item.quality = 0;
      return;
    }

    if (item.sellIn <= 5) {
      item.quality += 3;
      return;
    }

    if (item.sellIn <= 10) {
      item.quality += 2;
      return;
    }

    item.quality += 1;
  }
}

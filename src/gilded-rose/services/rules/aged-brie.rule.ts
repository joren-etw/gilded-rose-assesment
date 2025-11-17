import { Injectable } from '@nestjs/common';
import { RuleAbstract } from './rule.abstract';
import { Item } from '../../models/item.model';

@Injectable()
export class AgedBrieRule extends RuleAbstract {
  protected updateQuality(item: Item): void {
    if (item.sellIn < 0) {
      item.quality += 2;
      return;
    }

    item.quality += 1;
  }
}

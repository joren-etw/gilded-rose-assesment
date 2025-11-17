import { Injectable } from '@nestjs/common';
import { RuleAbstract } from './rule.abstract';
import { Item } from '../../models/item.model';

@Injectable()
export class ConjuredRule extends RuleAbstract {
  protected updateQuality(item: Item): void {
    if (item.sellIn < 0) {
      item.quality -= 4;
      return;
    }

    item.quality -= 2;
  }
}

import { Injectable } from '@nestjs/common';
import { Item } from '../../models/item.model';
import { RuleAbstract } from './rule.abstract';

@Injectable()
export class GeneralItemRule extends RuleAbstract {
  protected updateQuality(item: Item): void {
    // General items lose 1 quality per day
    item.quality -= 1;

    // After sell date, they lose twice as fast
    if (item.sellIn < 0) {
      item.quality -= 1;
    }
  }
}

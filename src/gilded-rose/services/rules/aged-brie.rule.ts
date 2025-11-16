import { Injectable } from '@nestjs/common';
import { RuleTemplate } from './rule-template';
import { Item } from '../../models/item.model';

@Injectable()
export class AgedBrieRule extends RuleTemplate {
  protected updateQuality(item: Item): void {
    item.quality += item.sellIn < 0 ? 2 : 1;
  }
}

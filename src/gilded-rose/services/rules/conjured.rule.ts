import { Injectable } from '@nestjs/common';
import { RuleTemplate } from './rule-template';
import { Item } from '../../models/item.model';

@Injectable()
export class ConjuredRule extends RuleTemplate {
  protected updateQuality(item: Item): void {
    item.quality -= item.sellIn < 0 ? 4 : 2;
  }
}

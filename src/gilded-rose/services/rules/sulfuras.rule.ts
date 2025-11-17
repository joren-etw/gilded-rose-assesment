import { Injectable } from '@nestjs/common';
import { RuleAbstract } from './rule.abstract';
import { Item } from '../../models/item.model';

@Injectable()
export class SulfurasRule extends RuleAbstract {
  protected get isLegendary(): boolean {
    return true;
  }

  protected updateQuality(item: Item) {
    // Sulfuras does nothing
  }
}

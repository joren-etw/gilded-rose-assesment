import { Injectable } from '@nestjs/common';
import { RuleTemplate } from './rule-template';
import { Item } from '../../models/item.model';

@Injectable()
export class SulfurasRule extends RuleTemplate {
  protected get isLegendary(): boolean {
    return true;
  }

  protected updateQuality(item: Item) {
    // Sulfuras does nothing
  }
}

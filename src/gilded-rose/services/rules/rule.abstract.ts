import { Item } from '../../models/item.model';

export abstract class RuleAbstract {
  apply(item: Item): Item {
    const updated = new Item(item.name, item.sellIn, item.quality);

    // generic sellIn behavior except Sulfuras
    if (!this.isLegendary) {
      updated.sellIn--;
    }

    this.updateQuality(updated);

    // enforce global quality constraints
    if (!this.isLegendary) {
      if (updated.quality < 0) updated.quality = 0;
      if (updated.quality > 50) updated.quality = 50;
    }

    return updated;
  }

  protected abstract updateQuality(item: Item): void;

  // override in Sulfuras
  protected get isLegendary(): boolean {
    return false;
  }
}

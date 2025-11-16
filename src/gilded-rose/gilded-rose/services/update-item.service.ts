import { Injectable } from '@nestjs/common';
import { Item } from '../models/item.model';
import { RuleResolverService } from './rules/rule-resolver.service';

@Injectable()
export class UpdateItemService {
  constructor(private readonly resolver: RuleResolverService) {}

  handle(items: Item[]): Item[] {
    return items.map((item) => {
      const rule = this.resolver.resolve(item.name);
      return rule.apply(item);
    });
  }
}

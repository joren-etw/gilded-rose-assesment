import { Injectable } from '@nestjs/common';
import { Item } from '../models/item.model';
import { RuleResolverService } from './rules/rule-resolver.service';
import { ItemDto } from '../dtos/item.dto';

@Injectable()
export class UpdateItemService {
  constructor(private readonly resolver: RuleResolverService) {}

  handle(items: ItemDto[]): Item[] {
    return items.map((item) => {
      const rule = this.resolver.resolve(item.name);
      return rule.apply(item);
    });
  }
}

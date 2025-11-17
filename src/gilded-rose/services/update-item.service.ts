import { Injectable } from '@nestjs/common';
import { Item } from '../models/item.model';
import { RuleResolver } from './rules/rule.resolver';
import { ItemDto } from '../dtos/item.dto';

@Injectable()
export class UpdateItemService {
  constructor(private readonly ruleResolver: RuleResolver) {}

  handle(items: ItemDto[]): Item[] {
    try {
      return items.map((item) => {
        const rule = this.ruleResolver.resolve(item.name);
        return rule.apply(item);
      });
    } catch (error) {
      console.error('Error updating items:', error);
      throw error;
    }
  }
}

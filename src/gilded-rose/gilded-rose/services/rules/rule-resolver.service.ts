import { Injectable } from '@nestjs/common';
import { AgedBrieRule } from './aged-brie.rule';
import { GeneralItemRule } from './general-item.rule';
import { RuleTemplate } from './rule-template';

@Injectable()
export class RuleResolverService {
  constructor(
    private readonly general: GeneralItemRule,
    private readonly brie: AgedBrieRule,
  ) {}

  resolve(name: string): RuleTemplate {
    if (name === 'Aged Brie') return this.brie;

    return this.general;
  }
}

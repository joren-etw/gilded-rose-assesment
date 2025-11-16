import { Injectable } from '@nestjs/common';
import { AgedBrieRule } from './aged-brie.rule';
import { GeneralItemRule } from './general-item.rule';
import { RuleTemplate } from './rule-template';
import { BackstagePassRule } from './backstage-pass.rule';

@Injectable()
export class RuleResolverService {
  constructor(
    private readonly general: GeneralItemRule,
    private readonly brie: AgedBrieRule,
    private readonly backstage: BackstagePassRule,
  ) {}

  resolve(name: string): RuleTemplate {
    if (name === 'Aged Brie') return this.brie;
    if (name.startsWith('Backstage passes')) return this.backstage;

    return this.general;
  }
}

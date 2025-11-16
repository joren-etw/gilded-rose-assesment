import { AgedBrieRule } from './aged-brie.rule';
import { RuleResolverService } from './rule-resolver.service';
import { GeneralItemRule } from './general-item.rule';
import { BackstagePassRule } from './backstage-pass.rule';
import { SulfurasRule } from './sulfuras.rule';
import { ConjuredRule } from './conjured.rule';

export const RulesProvider = [
  RuleResolverService,
  GeneralItemRule,
  AgedBrieRule,
  BackstagePassRule,
  SulfurasRule,
  ConjuredRule,
];

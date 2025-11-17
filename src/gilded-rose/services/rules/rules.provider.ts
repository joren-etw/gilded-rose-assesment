import { AgedBrieRule } from './aged-brie.rule';
import { RuleResolver } from './rule.resolver';
import { GeneralItemRule } from './general-item.rule';
import { BackstagePassRule } from './backstage-pass.rule';
import { SulfurasRule } from './sulfuras.rule';
import { ConjuredRule } from './conjured.rule';

export const RulesProvider = [
  RuleResolver,
  GeneralItemRule,
  AgedBrieRule,
  BackstagePassRule,
  SulfurasRule,
  ConjuredRule,
];

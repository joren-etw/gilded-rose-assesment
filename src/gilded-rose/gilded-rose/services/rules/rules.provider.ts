import { AgedBrieRule } from './aged-brie.rule';
import { RuleResolverService } from './rule-resolver.service';
import { GeneralItemRule } from './general-item.rule';
import { BackstagePassRule } from './backstage-pass.rule';

export const RulesProvider = [
  RuleResolverService,
  GeneralItemRule,
  AgedBrieRule,
  BackstagePassRule,
];

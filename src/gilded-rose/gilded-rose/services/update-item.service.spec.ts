import { Test, TestingModule } from '@nestjs/testing';

import { Item } from '../models/item.model';
import { UpdateItemService } from './update-item.service';

describe('UpdateItemService', () => {
  let service: UpdateItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateItemService],
    }).compile();

    service = module.get<UpdateItemService>(UpdateItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  const run = (item: Item) => service.handle([item])[0];

  describe('regular items', () => {
    it('decreases quality and sellIn by 1', () => {
      const result = run({ name: 'Elixir', sellIn: 10, quality: 20 });
      expect(result.sellIn).toBe(9);
      expect(result.quality).toBe(19);
    });

    it('degrades quality twice as fast after sell date', () => {
      const result = run({ name: 'Elixir', sellIn: 0, quality: 10 });
      expect(result.sellIn).toBe(-1);
      expect(result.quality).toBe(8);
    });

    it('quality never goes below 0', () => {
      const result = run({ name: 'Foo', sellIn: 5, quality: 0 });
      expect(result.sellIn).toBe(4);
      expect(result.quality).toBe(0);
    });
  });

  describe('Aged Brie', () => {
    it('increases in quality as it ages', () => {
      const result = run({ name: 'Aged Brie', sellIn: 5, quality: 10 });
      expect(result.sellIn).toBe(4);
      expect(result.quality).toBe(11);
    });

    it('never increases above 50', () => {
      const result = run({ name: 'Aged Brie', sellIn: 5, quality: 50 });
      expect(result.sellIn).toBe(4);
      expect(result.quality).toBe(50);
    });
  });

  describe('Sulfuras', () => {
    it('never changes sellIn or quality', () => {
      const result = run({
        name: 'Sulfuras, Hand of Ragnaros',
        sellIn: 0,
        quality: 80,
      });
      expect(result.sellIn).toBe(0);
      expect(result.quality).toBe(80);
    });
  });

  describe('Backstage passes', () => {
    it('quality increases by 1 normally', () => {
      const result = run({
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sellIn: 20,
        quality: 10,
      });
      expect(result.sellIn).toBe(-19);
      expect(result.quality).toBe(11);
    });

    it('quality increases by 2 when 10 days or less', () => {
      const result = run({
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sellIn: 10,
        quality: 10,
      });
      expect(result.sellIn).toBe(9);
      expect(result.quality).toBe(12);
    });

    it('quality increases by 3 when 5 days or less', () => {
      const result = run({
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sellIn: 5,
        quality: 10,
      });
      expect(result.sellIn).toBe(4);
      expect(result.quality).toBe(13);
    });

    it('quality drops to 0 after the concert', () => {
      const result = run({
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sellIn: 0,
        quality: 10,
      });
      expect(result.sellIn).toBe(-1);
      expect(result.quality).toBe(0);
    });

    it('quality never increases above 50', () => {
      const result = run({
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sellIn: 5,
        quality: 50,
      });
      expect(result.sellIn).toBe(4);
      expect(result.quality).toBe(50);
    });
  });

  describe('Conjured items', () => {
    it('quality degrades twice as fast as normal items', () => {
      const result = run({
        name: 'Conjured Mana Cake',
        sellIn: 10,
        quality: 10,
      });
      expect(result.quality).toBe(8);
      expect(result.sellIn).toBe(9);
    });

    it('quality degrades twice as fast after sell date (so x4 total)', () => {
      const result = run({
        name: 'Conjured Mana Cake',
        sellIn: 0,
        quality: 10,
      });
      expect(result.quality).toBe(6);
      expect(result.sellIn).toBe(-1);
    });

    it('quality never goes negative', () => {
      const result = run({ name: 'Conjured Mana Cake', sellIn: 0, quality: 1 });
      expect(result.sellIn).toBe(-1);
      expect(result.quality).toBe(0);
    });
  });
});

import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { ItemDto } from '../dtos/item.dto';

@Injectable()
export class ValidatePayloadPipe implements PipeTransform {
  async transform(value: any) {
    if (!Array.isArray(value)) {
      throw new BadRequestException('Expected an array of items');
    }

    const items = value.map((v) => plainToInstance(ItemDto, v));

    for (const item of items) {
      const errors = await validate(item, {
        whitelist: true,
        forbidNonWhitelisted: true,
      });
      if (errors.length > 0) {
        throw new BadRequestException(errors);
      }
    }

    return items;
  }
}

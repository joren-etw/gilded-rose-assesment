import { IsInt, IsNotEmpty, IsString } from '@nestjs/class-validator';

export class ItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  sellIn: number;

  @IsInt()
  quality: number;
}

import {
  IsString,
  IsNotEmpty,
  IsArray,
  ArrayNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateHeroDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  readonly abilities: string[];

  @IsString()
  @IsOptional()
  readonly origin?: string;
}

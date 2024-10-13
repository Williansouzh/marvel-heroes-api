import {
  IsString,
  IsNotEmpty,
  IsArray,
  ArrayNotEmpty,
  IsOptional,
  IsEnum,
  MaxLength,
} from 'class-validator';

enum HeroOrigin {
  EARTH = 'Earth',
  ASGARD = 'Asgard',
  SPACE = 'Space',
  UNKNOWN = 'Unknown',
}

export class UpdateHeroDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  readonly name: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  readonly abilities: string[];

  @IsString()
  @IsOptional()
  @IsEnum(HeroOrigin, { message: 'Invalid hero origin' })
  readonly origin?: HeroOrigin;
}

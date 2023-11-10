// import { ApiProperty } from '@nestjs/swagger';

import { IsString, MaxLength, MinLength, IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  // @ApiProperty()
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  title: string;

  @IsString()
  @MaxLength(20)
  @MinLength(1)
  @IsNotEmpty()
  isbn: string;
}

export class UpdateProductDto {
  //  @ApiProperty()
  public name: string;

  public price: string;
}

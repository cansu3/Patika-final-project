import {
  IsNotEmpty,
  IsString,
  IsInt,
  IsDate,
  IsBoolean,
} from 'class-validator';

export class UpdateFactoryDetailDto {
  @IsString()
  id: string;

  @IsString()
  factoryId: string;

  @IsNotEmpty()
  @IsString()
  department: string;

  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;

  @IsInt()
  usage: number;

  @IsInt()
  usageFee: number;

  @IsBoolean()
  discountedPrice: boolean;
}
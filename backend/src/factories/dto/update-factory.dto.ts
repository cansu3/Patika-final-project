import {
    IsNotEmpty,
    IsString,
    IsInt,
    IsBoolean,
    IsDate,
    isNumber,
    isString,
  } from 'class-validator';
  
  export class UpdateFactoryDto {
    @IsString()
    id: string;

    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsDate()
    startDate: Date;
  
    @IsDate()
    endDate: Date;

    @IsInt()
    numberOfEmployee: number;

    @IsBoolean()
    isFree: boolean;
  }
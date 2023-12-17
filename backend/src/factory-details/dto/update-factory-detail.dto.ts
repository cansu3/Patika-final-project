import {
    IsNotEmpty,
    IsString,
    IsEmail,
    IsInt,
    Min,
    Max,
  } from 'class-validator';
  
  export class UpdateFactoryDetailDto {
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @IsInt()
    @Min(18)
    @Max(45)
    age: number;
  }
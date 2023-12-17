import {
    IsNotEmpty,
    IsString,
    IsEmail,
    Min,
  } from 'class-validator';
  
  export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    username: string;
  
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    role: string;

    @IsNotEmpty()
    @Min(8)
    password: string;
  }
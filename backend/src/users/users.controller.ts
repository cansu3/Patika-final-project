import {
    Body,
    Controller,
    Get,
    Param,
    Post
  } from '@nestjs/common';
  
  import { UsersService } from './users.service';
  import { CreateUserDto } from './dto/create-user.dto';
  import { Public } from '../auth/auth.decorator'; // Bu yolu kendi projenize göre güncelleyin


  @Controller('users')
  export class UsersController {
    constructor(private readonly UsersService: UsersService) {}
 
  
    @Get(':id')
    async getUser(@Param('id') id: string) {
      return this.UsersService.getUser(id);
    }
    @Public()
    @Post()
    async creteUser(
      @Body() CreateUserDto: CreateUserDto,
    ) {
      return this.UsersService.createUser(CreateUserDto);
    }
  }
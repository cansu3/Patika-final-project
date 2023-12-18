import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { Public } from './auth.decorator'; // Bu yolu kendi projenize göre güncelleyin

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
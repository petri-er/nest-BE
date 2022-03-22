import { Controller, Get } from '@nestjs/common';
import { LoginService } from '../Services/login.service';

@Controller()
export class LoginController {
  constructor(private readonly appService: LoginService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

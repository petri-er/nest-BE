import { Module } from '@nestjs/common';
import { LoginController } from '../Controller/login.controller';
import { LoginService } from '../Services/login.service';

@Module({
  imports: [],
  controllers: [LoginController],
  providers: [LoginService],
})
export class AppModule {}

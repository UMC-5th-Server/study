import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// controller -> url을 가져오고 함수를 실행함. express의 라우터 같은 존재
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // express의 get 라우터와 같은 역할
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  sagHello(): string {
    //return 'Hello everyone';
    return this.appService.getHi();
  }
}

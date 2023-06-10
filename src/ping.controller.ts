import { Controller, Get, Res } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import { Response } from 'express';

@ApiExcludeController()
@Controller()
export default class PingController {
  @Get()
  swaggerRedirect(@Res() res: Response) {
    res.redirect('/api');
  }

  @Get('ping')
  ping() {
    return 'OK';
  }
}

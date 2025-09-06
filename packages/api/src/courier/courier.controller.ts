import { Controller, Get } from '@nestjs/common';
import { CourierService } from './courier.service';

@Controller('courier')
export class CourierController {
  constructor(private readonly svc: CourierService) {}

  @Get('ping')
  ping() {
    return this.svc.ping();
  }
}

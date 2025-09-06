import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly svc: AdminService) {}

  @Get('ping')
  ping() {
    return this.svc.ping();
  }
}

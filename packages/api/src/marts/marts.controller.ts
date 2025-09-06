import { Controller, Get, Query } from '@nestjs/common';
import { MartsService } from './marts.service';

@Controller('marts')
export class MartsController {
  constructor(private readonly svc: MartsService) {}

  @Get('nearby')
  async nearby(
    @Query('lat') lat: string,
    @Query('lng') lng: string,
    @Query('radiusKm') radiusKm = '5'
  ) {
    return this.svc.nearby(+lat, +lng, +radiusKm);
  }
}

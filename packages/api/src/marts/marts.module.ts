import { Module } from '@nestjs/common';
import { MartsController } from './marts.controller';
import { MartsService } from './marts.service';

@Module({
  controllers: [MartsController],
  providers: [MartsService],
})
export class MartsModule {}

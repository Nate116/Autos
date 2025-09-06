import { BullModuleOptions } from '@nestjs/bullmq';

export const bullConfig: BullModuleOptions = {
  connection: { url: process.env.REDIS_URL ?? 'redis://localhost:6379' },
};

import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MartsModule } from './marts/marts.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module';
import { CourierModule } from './courier/courier.module';
import { ReviewsModule } from './reviews/reviews.module';
import { AdminModule } from './admin/admin.module';
import { RealtimeModule } from './realtime/realtime.module';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [
    HealthModule, PrismaModule, AuthModule, UsersModule,
    MartsModule, OrdersModule, PaymentsModule, CourierModule,
    ReviewsModule, AdminModule, RealtimeModule, QueueModule
  ]
})
export class AppModule {}

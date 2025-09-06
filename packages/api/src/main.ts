import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import fastifyRateLimit from '@fastify/rate-limit';
import fastifyHelmet from '@fastify/helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter({ logger: true }));
  await app.register(fastifyHelmet);
  await app.register(fastifyRateLimit, { max: 300, timeWindow: '1 minute' });

  app.enableCors({ origin: process.env.WEB_ORIGIN?.split(',') ?? true, credentials: true });

  const port = process.env.API_PORT ? Number(process.env.API_PORT) : 4000;
  await app.listen(port, '0.0.0.0');
  console.log(`API running on :${port}`);
}
bootstrap();

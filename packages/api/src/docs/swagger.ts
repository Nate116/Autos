import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from '../app.module';

async function generate() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder().setTitle('WashLink API').build();
  const doc = SwaggerModule.createDocument(app, config);
  console.log(JSON.stringify(doc));
  await app.close();
}

generate();

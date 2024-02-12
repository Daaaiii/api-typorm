import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['hcode.com.br', '*'],
  });

  app.useGlobalPipes(new ValidationPipe());
  //app.useGlobalInterceptors(new LogInterceptor())
  await app.listen(3000);
}
bootstrap();

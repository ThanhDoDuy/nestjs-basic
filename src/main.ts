import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, 
  {
    logger: ['debug', 'error', "warn"]
  });
  await app.listen(3000);
}
bootstrap();

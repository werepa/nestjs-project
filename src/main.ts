import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NestJS Project')
    .setDescription('Gerenciador de vendas online')
    .setVersion('1.0')
    .addTag('tabelas')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document, {
    customCss: '.swagger-ui .topbar { display: none }',
  });

  const port = 3001;
  await app.listen(port);
  logger.log(`Application listening on http://localhost:${port}`);
}
bootstrap();

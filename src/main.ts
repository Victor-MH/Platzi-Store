import { APP_FILTER, NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            // Mínimo el whitelist, como backend dev decides si alertar al cliente y no continuar con el request o no
            whitelist: true, // Va a quitar del payload todos los atributos que no estén definidos en el dto (Solo quita)
            forbidNonWhitelisted: true, // Le dice a la API que le están enviando un atributo no definido (Alerta)
        }),
    );
    await app.listen(3000);
}
bootstrap();

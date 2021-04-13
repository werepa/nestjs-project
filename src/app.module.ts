import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [UsuarioModule, ProdutoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

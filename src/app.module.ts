import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';

import { CategoriaModule } from './categoria/categoria.module';

import { VentaModule } from './venta/venta.module';
//import { AuthModule } from './auth/auth.module';
import { join } from 'path';
import { ArticuloModule } from './articulo/articulo.module';
import { ClienteModule } from './cliente/cliente.module';
import { DetalleVentaModule } from './detalle-venta/detalle-venta.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [join(__dirname, '**/*.entity.{ts,js}')],
      synchronize: true,
      //autoLoadEntities: true
    }),
    UsuarioModule,

    CategoriaModule,

    VentaModule,
    //AuthModule,
    ArticuloModule,
    ClienteModule,
    DetalleVentaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

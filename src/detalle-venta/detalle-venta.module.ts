import { Module } from '@nestjs/common';
import { DetalleVentaService } from './detalle-venta.service';
import { DetalleVentaController } from './detalle-venta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleVentaEntity } from './entities/detalle-venta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DetalleVentaEntity])],
  controllers: [DetalleVentaController],
  providers: [DetalleVentaService]
})
export class DetalleVentaModule {}

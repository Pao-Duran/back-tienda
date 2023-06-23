import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalleVentaService } from './detalle-venta.service';
import { CreateDetalleVentaDto } from './dto/create-detalle-venta.dto';
import { UpdateDetalleVentaDto } from './dto/update-detalle-venta.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DetalleVentaEntity } from './entities/detalle-venta.entity';


@ApiTags('detalle-Venta')
@Controller('detalle-Venta')
export class DetalleVentaController {
  constructor(private readonly detalleVentaService: DetalleVentaService) {}

  @Post()
  @ApiCreatedResponse({ type: DetalleVentaEntity })
  @ApiOperation({ summary: 'Crea un nuev detalleventa'})
  create(@Body() createDetalleVentaDto: CreateDetalleVentaDto) {
    return this.detalleVentaService.create(createDetalleVentaDto);
  }

  @Get()
  @ApiOkResponse({ type: DetalleVentaEntity, isArray: true })
  @ApiOperation({ summary: 'Obtiene la lista de detalleventas'})
  findAll() {
    return this.detalleVentaService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: DetalleVentaEntity })
  @ApiOperation({ summary: 'Obtiene un detalleventa con base al identificador'})
  findOne(@Param('id') id: string) {
    return this.detalleVentaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: DetalleVentaEntity })
  @ApiOperation({ summary: 'Actualiza los datos de un detalleventa con base al identificador'})
  update(@Param('id') id: string, @Body() updateDetalleVentaDto: UpdateDetalleVentaDto) {
    return this.detalleVentaService.update(+id, updateDetalleVentaDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  @ApiOperation({ summary: 'Elimina un detalleventa con base al identificador'})
  remove(@Param('id') id: string) {
    return this.detalleVentaService.remove(+id);
  }
}

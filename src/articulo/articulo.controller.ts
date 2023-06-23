import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticuloService } from './articulo.service';
import { CreateArticuloDto } from './dto/create-articulo.dto';
import { UpdateArticuloDto } from './dto/update-articulo.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ArticuloEntity } from './entities/articulo.entity';




@ApiTags('articulos')
@Controller('articulos')
export class ArticuloController {
  constructor(private readonly articuloService: ArticuloService) {}

  @Post()
  @ApiCreatedResponse({ type: ArticuloEntity })
  @ApiOperation({ summary: 'Crea un nuevo articulo'})
  create(@Body() createArticuloDto: CreateArticuloDto) {
    return this.articuloService.create(createArticuloDto);
  }

  @Get()
  @ApiOkResponse({ type: ArticuloEntity, isArray: true })
  @ApiOperation({ summary: 'Obtiene la lista de articulos'})
  findAll() {
    return this.articuloService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ArticuloEntity })
  @ApiOperation({ summary: 'Obtiene un articulo con base al identificador'})
  findOne(@Param('id') id: string) {
    return this.articuloService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ArticuloEntity })
  @ApiOperation({ summary: 'Actualiza los datos de un articulo con base al identificador'})
  update(@Param('id') id: string, @Body() updateArticuloDto: UpdateArticuloDto) {
    return this.articuloService.update(+id, updateArticuloDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  @ApiOperation({ summary: 'Elimina un articulo con base al identificador'})
  remove(@Param('id') id: string) {
    return this.articuloService.remove(+id);
  }
}

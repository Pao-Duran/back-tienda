import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDetalleVentaDto } from './dto/create-detalle-venta.dto';
import { UpdateDetalleVentaDto } from './dto/update-detalle-venta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DetalleVentaEntity } from './entities/detalle-venta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DetalleVentaService {
  constructor(
    @InjectRepository(DetalleVentaEntity)
    private detalleventaRepository: Repository<DetalleVentaEntity>,
  ) {}
 
  async create(createdetalleVentaDto: CreateDetalleVentaDto): Promise<DetalleVentaEntity> {
    const existe = await this.detalleventaRepository.findOneBy({
      
      idVenta: createdetalleVentaDto.idVenta,
      idArticulo: createdetalleVentaDto.idArticulo,
      cantidad: createdetalleVentaDto.cantidad,
      precio: createdetalleVentaDto.precio.trim(),
    
    });

    if (existe) {
      throw new ConflictException(
        `la venta ${createdetalleVentaDto.idVenta} ya existe para la venta.`,
      );
    }

    return this.detalleventaRepository.save({
      idVenta: createdetalleVentaDto.idVenta,
      idArticulo: createdetalleVentaDto.idArticulo,
      cantidad: createdetalleVentaDto.cantidad,
      precio: createdetalleVentaDto.precio.trim(),
    });
  }

   async findAll(): Promise<DetalleVentaEntity[]> {
    return this.detalleventaRepository.find({ relations: { venta: true } });
  }

  async findOne(id: number): Promise<DetalleVentaEntity> {
    const venta = await this.detalleventaRepository.findOne({ where: {id}, relations: {venta: true}});

    if (!venta) {
      throw new NotFoundException(`La venta ${id} no existe.`);
    }

    return venta;
  }


  async update(id: number, UpdateDetalleVentaDto: UpdateDetalleVentaDto) {
    const venta = await this.detalleventaRepository.findOneBy({id});

    if (!venta) {
      throw new NotFoundException(`La venta ${id} no existe.`);
    }

    const UpdatedetalleVentaDto = Object.assign(venta, UpdateDetalleVentaDto);
    return this.detalleventaRepository.save(UpdatedetalleVentaDto);
  }

  async remove(id: number) {
    const existe = await this.detalleventaRepository.findOneBy({id});

    if (!existe) {
      throw new NotFoundException(`La venta ${id} no existe.`);
    }

    return this.detalleventaRepository.delete(id);
  }
}

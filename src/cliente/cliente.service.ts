import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteEntity } from './entities/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(ClienteEntity)
    private clienteRepository: Repository<ClienteEntity>,
  ) {}


  async create(
    createPersonaDto: CreateClienteDto,
  ): Promise<ClienteEntity> {
    const existe = await this.clienteRepository.findOneBy({
      nombre: createPersonaDto.nombre.trim(),
    });

    if (existe) {
      throw new ConflictException(`El nombre ${createPersonaDto.nombre} ya existe.`);
    }

    return this.clienteRepository.save({
      nombre: createPersonaDto.nombre.trim(),
      apellido: createPersonaDto.apellido.trim(),
      ciudad: createPersonaDto.ciudad.trim(),
      direccion: createPersonaDto.direccion.trim(),
      telefono: createPersonaDto.telefono,
      email: createPersonaDto.email.trim(),
 
    });
  }

  async findAll(): Promise<ClienteEntity[]> {
    return this.clienteRepository.find();
  }
  

  async findOne(id: number): Promise<ClienteEntity> {
    const nombre = await this.clienteRepository.findOneBy({id});

    if (!nombre) {
      throw new NotFoundException(`El nombre ${id} no existe.`);
    }

    return nombre;
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    const nombre = await this.clienteRepository.findOneBy({id});

    if (!nombre) {
      throw new NotFoundException(`El nombre ${id} no existe.`);
    }

    const nombreUpdate = Object.assign(nombre, updateClienteDto);
    return this.clienteRepository.save(nombreUpdate);
  }

  async remove(id: number) {
    const existe = await this.clienteRepository.findOneBy({id});

    if (!existe) {
      throw new NotFoundException(`El nombre ${id} no existe.`);
    }

    return this.clienteRepository.delete(id);
  }
}

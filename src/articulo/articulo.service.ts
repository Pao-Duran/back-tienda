import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateArticuloDto } from './dto/create-articulo.dto';
import { UpdateArticuloDto } from './dto/update-articulo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticuloEntity } from './entities/articulo.entity';
import { Repository } from 'typeorm';



@Injectable()
export class ArticuloService {
  constructor(
    @InjectRepository(ArticuloEntity)
    private articuloRepository: Repository<ArticuloEntity>,
  ) {}


  async create(createArticuloDto: CreateArticuloDto): Promise<ArticuloEntity> {
    const { nombre, marca } = createArticuloDto;
    
    const existe = await this.articuloRepository.findOne({
      where: { nombre: nombre.trim(), marca: marca.trim() },
    });

    if (existe) {
      throw new ConflictException(`El articulo ${nombre} ya existe.`);
    }

    const articulo = this.articuloRepository.create(createArticuloDto);

    return this.articuloRepository.save(articulo);
  }


  async findAll(): Promise<ArticuloEntity[]> {
    return this.articuloRepository.find();
  }


   async findOne(id: number): Promise<ArticuloEntity> {
    const articulo = await this.findOne(id);
  
    if (!articulo) {
      throw new NotFoundException(`El articulo ${id} no existe.`);
    }
  
    return articulo;
  }


  async update(id: number, updateArticuloDto: UpdateArticuloDto): Promise<ArticuloEntity> {
    const articulo = await this.findOne(id);

    Object.assign(articulo, updateArticuloDto);

    return this.articuloRepository.save(articulo);
  }


    async remove(id: number): Promise<void> {
    const articulo = await this.findOne(id);
  
    await this.articuloRepository.remove(articulo);
  }
}

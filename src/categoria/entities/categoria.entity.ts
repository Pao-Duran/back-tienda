import { ArticuloEntity } from "src/articulo/entities/articulo.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('categorias')
export class CategoriaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'idArticulo' })
  idArticulo: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  descripcion: string;

@ManyToOne(() => ArticuloEntity, (articulo) => articulo.categoria)
@JoinColumn({name: 'idArticulo', referencedColumnName: 'id'})
articulo: ArticuloEntity;
}

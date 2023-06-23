import { CategoriaEntity } from "src/categoria/entities/categoria.entity";
import { DetalleVentaEntity } from "src/detalle-venta/entities/detalle-venta.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('articulos')
export class ArticuloEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ length: 5 })
    codigo: string;

    @Column({ length: 200 })
    nombre: string;

    @Column({ length: 50 })
    marca: string;

    @Column()
    precio: number;
    
    @Column( {length: 500})
    descripcion: string;

    @OneToMany(() => CategoriaEntity, categoria => categoria.articulo)
    categoria: CategoriaEntity[];

    @OneToMany(() => DetalleVentaEntity, detalleVenta => detalleVenta.articulo)
    detalleVenta: DetalleVentaEntity[];
}

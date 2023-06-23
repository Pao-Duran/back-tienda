import { ArticuloEntity } from "src/articulo/entities/articulo.entity";
import { VentaEntity } from "src/venta/entities/venta.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('detalleventa')
export class DetalleVentaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'idVenta' })
    idVenta: number;

    @Column({ name: 'idArticulo' })
    idArticulo: number;

    @Column()
    cantidad: number;

    @Column()
    precio: string;

    @ManyToOne(() => VentaEntity, (venta) => venta.detalleVenta)
    @JoinColumn({name: 'idVenta', referencedColumnName: 'id'})
    venta: VentaEntity;

    @ManyToOne(() => ArticuloEntity, (articulo) => articulo.detalleVenta)
    @JoinColumn({name: 'idArticulo', referencedColumnName: 'id'})
    articulo: ArticuloEntity;
}

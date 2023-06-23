
import { ClienteEntity } from "src/cliente/entities/cliente.entity";
import { DetalleVentaEntity } from "src/detalle-venta/entities/detalle-venta.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, } from "typeorm";


@Entity('ventas')
export class VentaEntity {

 @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'idCliente' })
  idCliente: number;

  @Column()
  precioTotal: number;


 @ManyToOne(() => ClienteEntity, (cliente) => cliente.venta)
 @JoinColumn({name: 'idCliente', referencedColumnName: 'id'})
 cliente: ClienteEntity;

 @ManyToOne(() => DetalleVentaEntity, (detalleVenta) => detalleVenta.venta)
 @JoinColumn({name: 'idDetalle', referencedColumnName: 'id'})
 detalleVenta: DetalleVentaEntity;

}

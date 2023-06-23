import { VentaEntity } from "src/venta/entities/venta.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity('clientes')
export class ClienteEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:20})
    nombre: string;

    @Column({length:20})
    apellido: string;

    @Column({ length: 20 })
    ciudad: string;

    @Column({ })
    telefono: number;

    @Column({ length: 50 })
    direccion: string;

    @Column({length:30})
    email: string;

    
   @OneToMany(() => VentaEntity, venta => venta.cliente)
   venta: VentaEntity[];
}

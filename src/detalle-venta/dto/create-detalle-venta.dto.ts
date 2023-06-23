import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";


export class CreateDetalleVentaDto {
    @ApiProperty()
    @IsDefined({ message: 'El campo idVenta debe estar definido' })
    @IsNumber({}, { message: 'El campo idVenta debe ser de tipo numérico' })
    readonly idVenta: number;


    @ApiProperty()
    @IsDefined({ message: 'El campo idArticulo debe estar definido' })
    @IsNumber({}, { message: 'El campo ididArticuloVenta debe ser de tipo numérico' })
    readonly idArticulo: number;


    @ApiProperty()
    @IsDefined({ message: 'El campo cantidad debe estar definido' })
    @IsNumber({}, { message: 'El campo cantidad debe ser de tipo numérico' })
    readonly cantidad: number; 
    
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo precio no debe ser vacío' })
    @IsString({ message: 'El campo precio debe ser de tipo cadena' })
    @MaxLength(30, { message: 'El campo precio no debe ser mayor a 30 caracteres' })
    readonly precio: string;  
}

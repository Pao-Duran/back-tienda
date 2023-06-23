import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";


export class CreateVentaDto {
    @ApiProperty()
    @IsDefined({ message: 'El campo idArticulo debe estar definido' })
    @IsNumber({}, { message: 'El campo idArticulo debe ser de tipo numérico' })
    readonly idCliente: number;

  
    @ApiProperty()
    @IsDefined({ message: 'El campo precio debe estar definido' })
    @IsNumber({}, { message: 'El campo precio debe ser de tipo numérico' })
    readonly precioTotal: number;  
    

}

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsNotEmpty } from 'class-validator';

export class UsuarioDTO {
  @IsNotEmpty()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @ApiProperty()
  nome: string;

  @IsOptional()
  @ApiPropertyOptional()
  idade: number;

  @IsOptional()
  @ApiPropertyOptional()
  sexo: string;
}

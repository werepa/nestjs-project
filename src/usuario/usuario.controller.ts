import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Usuario } from 'src/models/usuario.model';
import { UsuarioDTO } from './dto/usuarioDTO';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
@ApiTags('tabelas')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  @ApiOperation({ summary: 'Retorna a lista de usuários' })
  getUsuarios() {
    return this.usuarioService.getUsuarios();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Retorna o usuário pelo ID' })
  @ApiParam({ name: 'id', required: true })
  getUsuarioById(@Param('id') id: string): Usuario {
    return this.usuarioService.getUsuarioById(parseInt(id));
  }

  @Post()
  @ApiOperation({ summary: 'Adiciona um usuario' })
  @ApiBody({ type: UsuarioDTO })
  @ApiResponse({
    status: 201,
    description: 'O registro foi adicionado.',
  })
  createUsuario(@Body() dto: UsuarioDTO): Usuario {
    return this.usuarioService.addUsuario(dto);
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Atualiza o usuário' })
  @ApiParam({ name: 'id', required: true })
  @ApiResponse({
    status: 200,
    description: 'O registro foi atualizado.',
  })
  updateUsuario(@Body() dto: UsuarioDTO): Usuario {
    return this.usuarioService.updateUsuario(dto);
  }

  @Delete('/:id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Exclui um usuário' })
  @ApiParam({ name: 'id', required: true })
  @ApiResponse({
    status: 204,
    description: 'O registro excluído.',
  })
  deleteUsuario(@Param('id') id: string): void {
    return this.usuarioService.deleteUsuario(parseInt(id));
  }
}

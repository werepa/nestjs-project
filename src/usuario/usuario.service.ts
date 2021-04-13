import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioService {
  getUsuarios(): { nome: string; sexo: string; idade: number }[] {
    return [
      { nome: 'Alfredo', sexo: 'M', idade: 28 },
      { nome: 'Fábio', idade: 33, sexo: 'M' },
    ];
  }
}

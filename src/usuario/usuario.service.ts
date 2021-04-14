import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/models/usuario.model';

@Injectable()
export class UsuarioService {
  usuarios: Usuario[] = [
    { id: 3, nome: 'Alfredo', sexo: 'M' },
    { id: 7, nome: 'Fábio', idade: 33, sexo: 'M' },
  ];

  getUsuarios(): Usuario[] {
    return [...this.usuarios];
  }

  getUsuarioById(id: number): Usuario {
    return [...this.usuarios.filter((u) => u.id === id)][0];
  }

  addUsuario(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);
    return this.usuarios.filter((u) => u.id === usuario.id)[0];
  }

  updateUsuario(usuario: Usuario): Usuario {
    const idx = this.usuarios.findIndex((u) => u.id === usuario.id);
    this.usuarios[idx] = usuario;
    return this.usuarios.filter((u) => u.id === usuario.id)[0];
  }

  deleteUsuario(id: number): void {
    this.usuarios = this.usuarios.filter((u) => u.id !== id);
    return;
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { Usuario } from 'src/models/usuario.model';
import { UsuarioService } from './usuario.service';

describe('UsuarioService', () => {
  let service: UsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuarioService],
    }).compile();

    service = module.get<UsuarioService>(UsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('deve retornar uma lista de usuários', () => {
    expect(service.getUsuarios().length).toBe(2);
    expect(service.getUsuarios()[0]).toHaveProperty('id');
    expect(Number.isInteger(service.getUsuarios()[0].id)).toBeTruthy();
    expect(service.getUsuarios()[0]).toHaveProperty('nome');
  });

  it('deve retornar um usuario pelo ID', () => {
    expect(service.getUsuarioById(3).nome).toBe('Alfredo');
    expect(service.getUsuarioById(7).nome).toBe('Fábio');
  });

  it('deve adicionar um usuário', () => {
    const qtde = service.getUsuarios().length;
    const novoUsuario: Usuario = {
      id: 10,
      nome: 'Weber',
    };
    service.addUsuario(novoUsuario);
    expect(service.getUsuarios().length).toBe(qtde + 1);
    expect(service.getUsuarioById(10).nome).toBe('Weber');
  });

  it('deve atualizar um usuario pelo ID', () => {
    const qtde = service.getUsuarios().length;
    const usuario: Usuario = {
      id: 7,
      nome: 'Alterado',
      idade: 42,
    };
    service.updateUsuario(usuario);
    expect(service.getUsuarios().length).toBe(qtde);

    const result = service.getUsuarioById(7);
    expect(result.idade).toBe(42);
    expect(result.nome).toBe('Alterado');
  });

  it('deve excluir um usuário', () => {
    const qtde = service.getUsuarios().length;
    service.deleteUsuario(7);
    expect(service.getUsuarios().length).toBe(qtde - 1);
  });
});

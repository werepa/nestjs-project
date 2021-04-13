import { Test, TestingModule } from '@nestjs/testing';
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

  it('should return a list of Users', () => {
    expect(service.getUsuarios().length).toBe(2);
    expect(service.getUsuarios()[0]).toHaveProperty('nome');
    expect(service.getUsuarios()[0]).toHaveProperty('idade');
    expect(service.getUsuarios()[0]).toHaveProperty('sexo');
  });
});

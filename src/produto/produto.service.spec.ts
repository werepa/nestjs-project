import { Test, TestingModule } from '@nestjs/testing';
import { ProdutoService } from './produto.service';

describe('ProdutoService', () => {
  let service: ProdutoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdutoService],
    }).compile();

    service = module.get<ProdutoService>(ProdutoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a list of products', () => {
    expect(service.getProdutos().length).toBe(3);
  });
});

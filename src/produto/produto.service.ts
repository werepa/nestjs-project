import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutoService {
  getProdutos(): { produto: string }[] {
    return [
      { produto: 'produto1' },
      { produto: 'produto2' },
      { produto: 'produto3' },
    ];
  }
}

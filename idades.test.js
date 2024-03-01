const idadesCategorias = require('./index.js');

describe('Testar Função de Sistema de Categoria', () => {
  test('Verifica se as idades estão de acordo com suas categorias', () => {
    expect(idadesCategorias(19)).toBe('Adulto');
  });
});

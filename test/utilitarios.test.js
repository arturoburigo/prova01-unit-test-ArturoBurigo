const Utilitarios = require('../src/utilitarios');

describe('Utilitarios', () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios();
  });

  describe('inverterString', () => {
    test('deve inverter uma string', () => {
      expect(utilitarios.inverterString('hello')).toBe('olleh');
      expect(utilitarios.inverterString('123')).toBe('321');
    });
  });

  describe('contarCaracteres', () => {
    test('deve contar caracteres de uma string', () => {
      expect(utilitarios.contarCaracteres('hello')).toBe(5);
      expect(utilitarios.contarCaracteres('')).toBe(0);
    });
  });

  describe('paraMaiusculas', () => {
    test('deve converter string para maiúsculas', () => {
      expect(utilitarios.paraMaiusculas('hello')).toBe('HELLO');
      expect(utilitarios.paraMaiusculas('Test')).toBe('TEST');
    });
  });

  describe('paraMinusculas', () => {
    test('deve converter string para minúsculas', () => {
      expect(utilitarios.paraMinusculas('HELLO')).toBe('hello');
      expect(utilitarios.paraMinusculas('Test')).toBe('test');
    });
  });

  describe('primeiraLetraMaiuscula', () => {
    test('deve capitalizar primeira letra', () => {
      expect(utilitarios.primeiraLetraMaiuscula('hello')).toBe('Hello');
      expect(utilitarios.primeiraLetraMaiuscula('test')).toBe('Test');
    });
  });

  describe('somar', () => {
    test('deve somar dois números', () => {
      expect(utilitarios.somar(2, 3)).toBe(5);
      expect(utilitarios.somar(-1, 1)).toBe(0);
    });
  });

  describe('subtrair', () => {
    test('deve subtrair dois números', () => {
      expect(utilitarios.subtrair(5, 3)).toBe(2);
      expect(utilitarios.subtrair(1, 1)).toBe(0);
    });
  });

  describe('multiplicar', () => {
    test('deve multiplicar dois números', () => {
      expect(utilitarios.multiplicar(2, 3)).toBe(6);
      expect(utilitarios.multiplicar(-2, 3)).toBe(-6);
    });
  });

  describe('dividir', () => {
    test('deve dividir dois números', () => {
      expect(utilitarios.dividir(6, 2)).toBe(3);
      expect(utilitarios.dividir(5, 2)).toBe(2.5);
    });

    test('deve lançar erro na divisão por zero', () => {
      expect(() => utilitarios.dividir(5, 0)).toThrow('Divisão por zero');
    });
  });

  describe('ehPar', () => {
    test('deve identificar números pares', () => {
      expect(utilitarios.ehPar(2)).toBe(true);
      expect(utilitarios.ehPar(3)).toBe(false);
    });
  });

  describe('primeiroElemento', () => {
    test('deve retornar primeiro elemento do array', () => {
      expect(utilitarios.primeiroElemento([1, 2, 3])).toBe(1);
      expect(utilitarios.primeiroElemento(['a', 'b'])).toBe('a');
    });
  });

  describe('ultimoElemento', () => {
    test('deve retornar último elemento do array', () => {
      expect(utilitarios.ultimoElemento([1, 2, 3])).toBe(3);
      expect(utilitarios.ultimoElemento(['a', 'b'])).toBe('b');
    });
  });

  describe('tamanhoArray', () => {
    test('deve retornar tamanho do array', () => {
      expect(utilitarios.tamanhoArray([1, 2, 3])).toBe(3);
      expect(utilitarios.tamanhoArray([])).toBe(0);
    });
  });

  describe('ordenarArray', () => {
    test('deve ordenar array', () => {
      expect(utilitarios.ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
      expect(utilitarios.ordenarArray(['c', 'a', 'b'])).toEqual(['a', 'b', 'c']);
    });
  });

  describe('inverterArray', () => {
    test('deve inverter array', () => {
      expect(utilitarios.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
      expect(utilitarios.inverterArray(['a', 'b'])).toEqual(['b', 'a']);
    });
  });

  describe('gerarNumeroAleatorio', () => {
    test('deve gerar número aleatório dentro do limite', () => {
      const resultado = utilitarios.gerarNumeroAleatorio(10);
      expect(resultado).toBeGreaterThanOrEqual(0);
      expect(resultado).toBeLessThan(10);
    });

    test('deve usar limite padrão de 100', () => {
      const resultado = utilitarios.gerarNumeroAleatorio();
      expect(resultado).toBeGreaterThanOrEqual(0);
      expect(resultado).toBeLessThan(100);
    });
  });

  describe('ehNumero', () => {
    test('deve identificar números válidos', () => {
      expect(utilitarios.ehNumero(42)).toBe(true);
      expect(utilitarios.ehNumero('42')).toBe(false);
      expect(utilitarios.ehNumero(NaN)).toBe(false);
    });
  });

  describe('removerEspacos', () => {
    test('deve remover espaços em branco', () => {
      expect(utilitarios.removerEspacos('  hello  ')).toBe('hello');
      expect(utilitarios.removerEspacos('test')).toBe('test');
    });
  });

  describe('repetirTexto', () => {
    test('deve repetir texto', () => {
      expect(utilitarios.repetirTexto('a', 3)).toBe('aaa');
      expect(utilitarios.repetirTexto('test', 2)).toBe('testtest');
    });
  });

  describe('juntarArray', () => {
    test('deve juntar array com separador padrão', () => {
      expect(utilitarios.juntarArray(['a', 'b', 'c'])).toBe('a,b,c');
    });

    test('deve juntar array com separador customizado', () => {
      expect(utilitarios.juntarArray(['a', 'b'], '-')).toBe('a-b');
    });
  });

  describe('contarPalavras', () => {
    test('deve contar palavras em string', () => {
      expect(utilitarios.contarPalavras('hello world')).toBe(2);
      expect(utilitarios.contarPalavras('test')).toBe(1);
    });
  });

  describe('mediaArray', () => {
    test('deve calcular média do array', () => {
      expect(utilitarios.mediaArray([1, 2, 3])).toBe(2);
      expect(utilitarios.mediaArray([0])).toBe(0);
    });

    test('deve retornar 0 para array vazio', () => {
      expect(utilitarios.mediaArray([])).toBe(0);
    });
  });

  describe('removerDuplicados', () => {
    test('deve remover elementos duplicados', () => {
      expect(utilitarios.removerDuplicados([1, 2, 2, 3])).toEqual([1, 2, 3]);
      expect(utilitarios.removerDuplicados(['a', 'b', 'a'])).toEqual(['a', 'b']);
    });
  });

  describe('ehPalindromo', () => {
    test('deve identificar palíndromos', () => {
      expect(utilitarios.ehPalindromo('racecar')).toBe(true);
      expect(utilitarios.ehPalindromo('hello')).toBe(false);
      expect(utilitarios.ehPalindromo('A man a plan a canal Panama')).toBe(true);
    });
  });

  describe('mesclarObjetos', () => {
    test('deve mesclar dois objetos', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 3, c: 4 };
      expect(utilitarios.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
    });
  });
});

/**
 * Esta interface será responsável por conter os dados que serão usados para mostrar dados para o usuário quando ele abrir o diálogo de compra.
 */
export interface IProduct {
  /**
   * string  -  nome do produto
   */
  productName: string;
  /**
   * string - descrição do produto
   */
  description: string;
  /**
   * number - preço do produto
   */
  productPrice: number;
  /**
   * string = caminho de onde a imagem está
   */
  urlImage: string;
  /**
   * boolean - indica o tipo de produto
   */
  isSticker: boolean;
}

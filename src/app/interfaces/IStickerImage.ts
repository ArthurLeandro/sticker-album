/**
 * Esta interface será responsável por conter os dados que serão usados para mostrar dados para o usuário quando ele abrir o diálogo de compra.
 */
export interface IStickerImage {
  /**
   * string  -  nome do produto
   */
  id: number;
  /**
   * string - descrição do produto
   */
  orientation: string;
  /**
   * number - preço do produto
   */
  stickerNumber: number;
  /**
   * string = caminho de onde a imagem está
   */
  urlImage: string;
}
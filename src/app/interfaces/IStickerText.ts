
/**
 * Esta interface será responsável por conter os dados que serão usados para mostrar dados para o usuário quando ele abrir o diálogo de compra.
 */
export interface IStickerText {
  /**
   * string - descrição do produto
   */
  anchor: string;
  /**
   * number - preço do produto
   */
  textContent: string;
  /**
   * string = caminho de onde a imagem está
   */
  typeOfSticker: string;
}

/**
 * Esta interface será responsável por mostrar dados de um determinado álbum quando este necessitar de visualização.
 */
export interface IAlbum {
  /**
   * string - indica o caminho de onde a imagem está
   */
  urlImage: string;
  /**
   * string = nome do álbum em questão
   */
  name: string;
  /**
   * id - número usado para encontrar o id
   */
  id: number;
}

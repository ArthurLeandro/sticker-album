import { Album } from "../class/albums";
/**
 *  Esta interface é responsável por armazenar dados que serão mostrados para o usuario na hora que ele chegar a área de introdução.
 */
export interface IntroPage {
  /**
   * Os conjuntos de álbuns que são mostrados
   */
  allAlbuns: Album[];
  /**
   * O nome da seção em questão
   */
  sectionName: string;
}

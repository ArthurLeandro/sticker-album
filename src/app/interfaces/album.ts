import { I_Page } from "./page";
/**
 * Esta interface será responsável por mostrar dados de um determinado álbum quando este necessitar de visualização.
 */
export interface IAlbum {
  ID: number;
  name: string;
  pages: I_Page[];
}

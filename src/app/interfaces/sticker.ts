import { SideOfSticker } from "./side-of-sticker.enum";
import { TypeOfSticker } from "./type-of-sticker.enum";

/**
 * Essa interface será utilizada para auxiliar na criação de dados que serão consumidos.
 */
export interface ISticker {
  /**
   * string - indica onde a figurinha está localizada
   */
  urlImage: string;
  /**
   * string - o que deve aparecer na figurinha
   */
  description: string;
  /**
   * number - número do id
   */
  id: number;
  /**
   * enum - qual lado o text irá aparecer
   */
  side: SideOfSticker;
  /**
   * enum - como o sticker ficará na tela
   */
  type: TypeOfSticker;
  /**
   * string - Nome da figurinha
   */
  name: string;
}

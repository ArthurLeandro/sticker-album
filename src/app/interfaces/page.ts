import { I_Text } from "./texto";
import { I_Image } from "./image";
import { TypeOfSticker } from "./type-of-sticker.enum";
export interface I_Page {
  ID: number;
  text: I_Text;
  image: I_Image;
  typeOfSticker: TypeOfSticker;
}

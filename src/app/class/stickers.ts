import { ISticker } from "../interfaces/sticker";
import { SideOfSticker } from "../interfaces/side-of-sticker.enum";
import { TypeOfSticker } from "../interfaces/type-of-sticker.enum";
export class Sticker implements ISticker {
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

  constructor(
    imag: string,
    desc: string,
    ID: number,
    sid: SideOfSticker,
    type: TypeOfSticker
  ) {
    this.urlImage = imag;
    this.id = ID;
    this.side = sid;
    this.description = desc;
    this.type = type;
  }
}
export class AllStickers {
  allStickers: Sticker[];
  constructor() {
    this.Init();
  }
  public Init(): void {
    this.allStickers = [
      new Sticker(
        "../../assets/images/new_capa-min.png",
        "",
        0,
        SideOfSticker.LEFT,
        TypeOfSticker.ONLY_ONE_IN_PAGE
      ),
      new Sticker(
        "../../assets/images/indice.png",
        "",
        0,
        SideOfSticker.ABOVE,
        TypeOfSticker.ONLY_ONE_IN_PAGE
      ),
      new Sticker(
        "../../assets/images/image_1.png",
        "O homem observou que um conjunto com três animais e um conjunto com três árvores possuem uma propriedade comum: a quantidade.Essa era a ideia de número.Dos números naturais.",
        0,
        SideOfSticker.ABOVE,
        TypeOfSticker.TWO_IN_PAGE
      ),
      new Sticker(
        "../../assets/images/image_2.png",
        "Na era Paleolítica, o homem produzia seus instrumentos, caçava e colhia para seu próprio sustento.O homem usava a pedra para marcar ossos, fazia nós em cordas ou usava os próprios dedos para determinar quantidades.",
        1,
        SideOfSticker.BELLOW,
        TypeOfSticker.TWO_IN_PAGE
      ),
      new Sticker(
        "../../assets/images/image_3.png",
        "Das antigas civilizações, podemos citar os egípcios que viveram na margem do Rio Nilo há 5 000 anos",
        2,
        SideOfSticker.ABOVE,
        TypeOfSticker.ONLY_ONE_IN_PAGE
      ),
      new Sticker(
        "../../assets/images/image_4.png",
        "Com o aumento da população, surgiu a necessidade de plantar e colher para sustentação de comunidades que o homem criou para facilitar sua sobrevivência.O homem já dominava o fogo e a linguagem",
        3,
        SideOfSticker.RIGHT,
        TypeOfSticker.TWO_IN_PAGE
      ),
      new Sticker(
        "../../assets/images/image_5_960x604.png",
        "Criaram também o calendário de 365 dias. Construíram grandes monumentos e grandes cidades.",
        4,
        SideOfSticker.LEFT,
        TypeOfSticker.TWO_IN_PAGE
      ),
      new Sticker(
        "../../assets/images/imagem_fundo_250x353.png",
        "",
        0,
        SideOfSticker.LEFT,
        TypeOfSticker.ONLY_ONE_IN_PAGE
      ),
    ];
  }
}

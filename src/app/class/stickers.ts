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

  isCover: boolean;

  constructor(
    imag: string,
    desc: string,
    ID: number,
    sid: SideOfSticker,
    type: TypeOfSticker,
    cover: boolean
  ) {
    this.urlImage = imag;
    this.id = ID;
    this.side = sid;
    this.description = desc;
    this.type = type;
    this.isCover = cover;
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
        TypeOfSticker.capa,
        true
      ),
      new Sticker("", "", -1, SideOfSticker.BELLOW, TypeOfSticker.capa, false),
      new Sticker(
        "../../assets/images/introducao.png",
        "Caro (a) aluno (a), é com muito prazer que eu apresento a versão virtual do álbum de figurinhas História da Matemática.Há mais de 20 anos lecionando Matemática para jovens e adultos, eu sempre percebi muita dificuldade por parte da maioria em interpretar problemas e desenvolver cálculos matemáticos. Por isso criei um material que possa motivar os estudantes a praticar os exercícios e estudar de forma mais aprofundada os prazeres da Matemática. Eu  espero que você goste.Bons estudos! Um abraço do Paulinho. ",
        1,
        SideOfSticker.BELLOW,
        TypeOfSticker.figurinha,
        false
      ),
      new Sticker(
        "../../assets/images/image_1.png",
        "Na era Paleolítica, o homem produzia seus instrumentos, caçava e colhia para seu próprio sustento.O homem usava a pedra para marcar ossos, fazia nós em cordas ou usava os próprios dedos para determinar quantidades.",
        2,
        SideOfSticker.ABOVE,
        TypeOfSticker.figurinha,
        false
      ),
      new Sticker(
        "../../assets/images/image_2.png",
        "O homem observou que um conjunto com três animais e um conjunto com três árvores possuem uma propriedade comum: a quantidade.Essa era a ideia de número.Dos números naturais.",
        3,
        SideOfSticker.BELLOW,
        TypeOfSticker.figurinha,
        false
      ),
      new Sticker(
        "../../assets/images/image_3.png",
        "Com o aumento da população, surgiu a necessidade de plantar e colher para sustentação de comunidades que o homem criou para facilitar sua sobrevivência.O homem já dominava o fogo e a linguagem",
        4,
        SideOfSticker.ABOVE,
        TypeOfSticker.figurinha,
        false
      ),
      new Sticker(
        "../../assets/images/image_4.png",
        "Das antigas civilizações, podemos citar os egípcios que viveram na margem do Rio Nilo há 5 000 anos",
        5,
        SideOfSticker.LEFT,
        TypeOfSticker.figurinha,
        false
      ),
      new Sticker(
        "../../assets/images/image_5_960x604.png",
        "Criaram também o calendário de 365 dias. Construíram grandes monumentos e grandes cidades.",
        6,
        SideOfSticker.LEFT,
        TypeOfSticker.figurinha,
        false
      ),
      new Sticker(
        "../../assets/images/image_6.png",
        "Os egípcios inventaram o relógio de sol e a balança.",
        7,
        SideOfSticker.BELLOW,
        TypeOfSticker.figurinha,
        false
      ),
      new Sticker(
        "../../assets/images/image_7.png",
        "Heródoto, o primeiro historiador da Grécia Antiga, afirmava que os egípcios frequentemente tinham que remarcar suas terras prejudicadas pelas inundações do Rio Nilo.Para isso, eram usadas algumas técnicas primitivas de matemática. Através da divisão das terras, surgiu a ideia de número fracionário.E através dessa medida da terra, surgiu a Geometria.",
        8,
        SideOfSticker.ABOVE,
        TypeOfSticker.figurinha,
        false
      ),
      new Sticker(
        "../../assets/images/new_contra-min.png",
        "",
        0,
        SideOfSticker.LEFT,
        TypeOfSticker.capa,
        true
      ),
    ];
  }
}

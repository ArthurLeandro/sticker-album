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
        TypeOfSticker.BACK_OR_FRONT_COVER,
        true
      ),
      new Sticker(
        "",
        "",
        -1,
        SideOfSticker.BELLOW,
        TypeOfSticker.ONLY_ONE_IN_PAGE,
        false
      ),
      new Sticker(
        "../../assets/images/introducao.png",
        "Caro (a) aluno (a), é com muito prazer que eu apresento a versão virtual do álbum de figurinhas História da Matemática.Há mais de 20 anos lecionando Matemática para jovens e adultos, eu sempre percebi muita dificuldade por parte da maioria em interpretar problemas e desenvolver cálculos matemáticos. Por isso criei um material que possa motivar os estudantes a praticar os exercícios e estudar de forma mais aprofundada os prazeres da Matemática. Eu  espero que você goste.Bons estudos! Um abraço do Paulinho. ",
        1,
        SideOfSticker.BELLOW,
        TypeOfSticker.ONLY_ONE_IN_PAGE,
        false
      ),
      new Sticker(
        "../../assets/images/image_1.png",
        "O homem observou que um conjunto com três animais e um conjunto com três árvores possuem uma propriedade comum: a quantidade.Essa era a ideia de número.Dos números naturais.",
        2,
        SideOfSticker.ABOVE,
        TypeOfSticker.TWO_IN_PAGE,
        false
      ),
      new Sticker(
        "../../assets/images/image_2.png",
        "Na era Paleolítica, o homem produzia seus instrumentos, caçava e colhia para seu próprio sustento.O homem usava a pedra para marcar ossos, fazia nós em cordas ou usava os próprios dedos para determinar quantidades.",
        3,
        SideOfSticker.BELLOW,
        TypeOfSticker.TWO_IN_PAGE,
        false
      ),
      new Sticker(
        "../../assets/images/image_3.png",
        "Das antigas civilizações, podemos citar os egípcios que viveram na margem do Rio Nilo há 5 000 anos",
        4,
        SideOfSticker.ABOVE,
        TypeOfSticker.ONLY_ONE_IN_PAGE,
        false
      ),
      new Sticker(
        "../../assets/images/image_4.png",
        "Com o aumento da população, surgiu a necessidade de plantar e colher para sustentação de comunidades que o homem criou para facilitar sua sobrevivência.O homem já dominava o fogo e a linguagem",
        5,
        SideOfSticker.RIGHT,
        TypeOfSticker.TWO_IN_PAGE,
        false
      ),
      new Sticker(
        "../../assets/images/image_5_960x604.png",
        "Criaram também o calendário de 365 dias. Construíram grandes monumentos e grandes cidades.",
        6,
        SideOfSticker.LEFT,
        TypeOfSticker.TWO_IN_PAGE,
        false
      ),
      new Sticker(
        "../../assets/images/image_6.png",
        "Os egípcios inventaram o relógio de sol e a balança.",
        7,
        SideOfSticker.ABOVE,
        TypeOfSticker.TWO_IN_PAGE,
        false
      ),
      new Sticker(
        "../../assets/images/image_7.png",
        "Heródoto, o primeiro historiador da Grécia Antiga, afirmava que os egípcios frequentemente tinham que remarcar suas terras prejudicadas pelas inundações do Rio Nilo.Para isso, eram usadas algumas técnicas primitivas de matemática. Através da divisão das terras, surgiu a ideia de número fracionário.E através dessa medida da terra, surgiu a Geometria.",
        8,
        SideOfSticker.ABOVE,
        TypeOfSticker.TWO_IN_PAGE,
        false
      ),
      new Sticker(
        "../../assets/images/image_8.png",
        "Os faraós ordenavam que as terras fossem divididas proporcionalmente à quantidade de membros da família em condições de trabalho.Os faraós acreditavam, há milênios, que se não houvesse terra ociosa, nem mão de obra ociosa, haveria fartura para todos.Os egípcios produziram um sistema de numeração interessante.O sistema não é posicional, ou seja, a ordem dos símbolos não interfere no valor do número.A matemática dos egípcios era prática.Solucionava problemas do dia a dia..",
        9,
        SideOfSticker.LEFT,
        TypeOfSticker.TWO_IN_PAGE,
        false
      ),
      new Sticker(
        "../../assets/images/image_9.png",
        "Os egípcios inventaEsse papiro contém as soluções de problemas práticos envolvendo geometria e trigonometria que os egípcios costumavam resolver.Hoje ele se encontra no British Museum, em Londres, e é conhecido como Papiro de Rhind.Quase tudo que sabemos sobre a matemática dos egípcios ficou registrado no Papiro Ahmes.ram o relógio de sol e a balança.",
        10,
        SideOfSticker.ABOVE,
        TypeOfSticker.TWO_IN_PAGE,
        false
      ),
      new Sticker(
        "../../assets/images/image_10.png",
        "Ficava no Egito a maior biblioteca da Antiguidade.Era a Biblioteca de Alexandria. Funcionava como uma universidade e reunia obras de todo o mundo antigo. Nela trabalharam matemáticos importantes como:Euclides e Eratóstenes",
        11,
        SideOfSticker.ABOVE,
        TypeOfSticker.TWO_IN_PAGE,
        false
      ),
      new Sticker(
        "../../assets/images/image_11.png",
        "Eratóstenes de Cirene ficou muito conhecido, pois foi o matemático que conseguiu medir o raio da Terra.Eratóstenes criou um dispositivo onde era possível achar todos os números primos menores que um número n qualquer.",
        12,
        SideOfSticker.ABOVE,
        TypeOfSticker.TWO_IN_PAGE,
        false
      ),
      new Sticker(
        "../../assets/images/image_11.png",
        "Eratóstenes de Cirene ficou muito conhecido, pois foi o matemático que conseguiu medir o raio da Terra.Eratóstenes criou um dispositivo onde era possível achar todos os números primos menores que um número n qualquer.",
        12,
        SideOfSticker.ABOVE,
        TypeOfSticker.TWO_IN_PAGE,
        false
      ),
      new Sticker(
        "../../assets/images/image_12.png",
        "Euclides de Alexandria escreveu de maneira organizada todos os conhecimentos de geometria que existiam até sua época.Sua obra foi intitulada 'Os elementos'.Nela está contida a Geometria Euclideana que até hoje é estudada nas escolas",
        13,
        SideOfSticker.ABOVE,
        TypeOfSticker.TWO_IN_PAGE,
        false
      ),
      new Sticker(
        "../../assets/images/image_13.png",
        "Arquimedes de Siracusa foi também um matemático grego famoso que frequentou o museu de Alexandria.Arquimedes inventou engenhosas máquinas usadas na guerra para manter o inimigo distante, como catapultas para lançar pedras,.",
        14,
        SideOfSticker.ABOVE,
        TypeOfSticker.TWO_IN_PAGE,
        false
      ),
      new Sticker(
        "../../assets/images/new_contra-min.png",
        "",
        0,
        SideOfSticker.LEFT,
        TypeOfSticker.BACK_OR_FRONT_COVER,
        true
      ),
    ];
  }
}

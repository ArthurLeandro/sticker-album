import { IProduct } from "../interfaces/product";
export class Product implements IProduct {
  /**
   * string  -  nome do produto
   */
  productName: string;
  /**
   * string - descrição do produto
   */
  description: string;
  /**
   * number - preço do produto
   */
  productPrice: number;
  /**
   * string = caminho de onde a imagem está
   */
  urlImage: string;
  /**
   * boolean - indica o tipo de produto
   */
  isSticker: boolean;
  constructor(
    name: string,
    desc: string,
    price: number,
    image: string,
    sticker: boolean
  ) {
    this.productName = name;
    this.description = desc;
    this.productPrice = price;
    this.urlImage = image;
    this.isSticker = sticker;
  }
}

export class AllProduct {
  allProducts: Product[];
  constructor() {
    this.Init();
  }

  public Init(): void {
    this.allProducts = [
      new Product(
        "Figurinha 1",
        "O homem observou que um conjunto com três animais e um conjunto com três árvores possuem uma propriedade comum: a quantidade.Essa era a ideia de número.Dos números naturais.",
        3.0,
        "../../assets/images/image_1.png",
        true
      ),
      new Product(
        "Figurinha 2",
        "Na era Paleolítica, o homem produzia seus instrumentos, caçava e colhia para seu próprio sustento.O homem usava a pedra para marcar ossos, fazia nós em cordas ou usava os próprios dedos para determinar quantidades.",
        12.0,
        "../../assets/images/image_2.png",
        true
      ),
      new Product(
        "Figurinha 3",
        "Das antigas civilizações, podemos citar os egípcios que viveram na margem do Rio Nilo há 5 000 anos",
        4.0,
        "../../assets/images/image_3.png",
        true
      ),
      new Product(
        "Figurinha 4",
        "Com o aumento da população, surgiu a necessidade de plantar e colher para sustentação de comunidades que o homem criou para facilitar sua sobrevivência.O homem já dominava o fogo e a linguagem",
        3.5,
        "../../assets/images/image_4.png",
        true
      ),
      new Product(
        "Figurinha 5",
        "Criaram também o calendário de 365 dias. Construíram grandes monumentos e grandes cidades.",
        1.0,
        "../../assets/images/image_5_960x604.png",
        true
      ),
    ];
  }
}

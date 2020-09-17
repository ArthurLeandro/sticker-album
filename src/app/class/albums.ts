import { IAlbum } from "../interfaces/album";
import { IntroPage } from "../interfaces/intro-page";

export class Album implements IAlbum {
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
  constructor(image: string, name: string, ID: number) {
    this.urlImage = image;
    this.name = name;
    this.id = ID;
  }
}

export class AllAlbums {
  allAlbums: Album[];

  constructor() {
    this.Init();
  }
  public Init(): void {
    this.allAlbums = [
      new Album("../../assets/images/new_capa-min.png", "Contos e Contas", 0),
      new Album("../../assets/images/new_contra-min.png", "Contas e Contos", 0),
      new Album("../../assets/images/Indice.png", "Indice", 0),
    ];
  }
}
export class PageContent implements IntroPage {
  allAlbuns: Album[];
  sectionName: string;
  constructor(albuns: Album[], name: string) {
    this.sectionName = name;
    this.allAlbuns = albuns;
  }
}
export class IntroPageContent {
  content: PageContent;
  albums: AllAlbums;

  constructor(name: string) {
    this.albums = new AllAlbums();
    this.content = new PageContent(this.albums.allAlbums, name);
  }
}

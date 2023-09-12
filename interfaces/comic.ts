export interface Comics {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: DataClass;
}

export interface DataClass {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Comic[];
}

export interface Comic {
  id: number;
  title: string;
  description: string;
  pageCount: number;
  series: Series;
  textObjects: TextObject[];
  thumbnail: Thumbnail;
  images: Thumbnail[];
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Characters;
  price?: number;
  oldPrice?: number;
  stock?: number;
}

export interface Characters {
  available: number;
  collectionURI: string;
  items: Character[];
  returned: number;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: ComicsCharacter;
}

export interface Creators {
  available: number;
  collectionURI: string;
  items: Creator[];
  returned: number;
}

export interface Creator {
  name: string;
  resourceURI: string;
  role?: string;
}

export interface ComicsCharacter {
  available: number;
  collectionURI: string;
  items: Series[];
  returned: number;
}

export interface Series {
  resourceURI: string;
  name: string;
}

export interface DateElement {
  type: string;
  date: string;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export interface Item {
  resourceURI: string;
  name: string;
  type: string;
}

export interface TextObject {
  type: string;
  language: string;
  text: string;
}

export interface URL {
  type: string;
  url: string;
}

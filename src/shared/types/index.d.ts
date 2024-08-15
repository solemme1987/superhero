export interface Superhero {
  id: string;
  name: string;
  powerstats: Powerstats;
  biography: Biography;
  appearance: Appearance;
  work: Work;
  connections: Connections;
  image: Image;
}
export interface Powerstats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}
export interface Biography {
  fullName: string;
  alterEgos: string;
  aliases?: string[] | null;
  placeOffBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: string;
}
export interface Appearance {
  gender: string;
  race: string;
  height?: string[] | null;
  weight?: string[] | null;
  eyeColor: string;
  hairColor: string;
}
export interface Work {
  occupation: string;
  base: string;
}
export interface Connections {
  groupAffiliation: string;
  relatives: string;
}
export interface Image {
  url: string;
}

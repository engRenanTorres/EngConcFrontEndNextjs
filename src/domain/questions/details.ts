export enum Level {
  SUPERIOR = 'Superior',
  TÉCNICO = 'Técnico',
  MÉDIO = 'Médio',
}

export type Profession = {
  id?: number;
  name: string;
  about?: string;
  consil?: string;
};

export enum Alternatives {
  A = 'a',
  B = 'b',
  C = 'c',
  D = 'd',
  E = 'e',
  TRUE = 'Certo',
  FALSE = 'Errado',
}

export type SubjectArea = {
  id?: number;
  name: string;
  professions: Profession[];
};

export interface Institute {
  id?: number;
  name: string;
  about?: string;
  contact?: Contact;
}

export interface Contact {
  telephone?: string;
  website?: string;
  instagram?: string;
  twitter?: string;
  facebook?: string;
}

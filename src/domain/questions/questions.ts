import { User } from '../users/users';
import {
  Alternatives,
  Institute,
  Level,
  Profession,
  SubjectArea,
} from './details';

export type Question = {
  id: number;
  level: Level;
  profession: Profession;
  institute: Institute;
  subjectArea: SubjectArea;
  body: string;
  alternatives: string[];
  year: number;
  concurso: string;
  answer: Alternatives;
  tips: string;
  createdAt: number;
  updatedAt?: number[];
  author: User;
  results?: object[];
};

import { Contact } from '../questions/details';

export interface User {
  id?: number;
  name: string;
  about?: string;
  roles: number[];
  contact?: Contact;
  results?: object[];
}

import axios from 'axios';

export const fetchJson = async <T>(url: string): Promise<T> => {
  return await axios.get(url);
};

import { Record } from '../types/record';
import { SpringPage } from '../types/vendor/spring';
import { BASE_URL } from './system';

export const recordsLoader = (page?: number) => {
  return async (): Promise<SpringPage<Record>> => {
    const res = await fetch(`${BASE_URL}/records?linesPerPage=12&page=${page}`);
    const records = await res.json();
    return records;
  };
};

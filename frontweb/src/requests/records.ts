import { Record } from '../types/record';
import { SpringPage } from '../types/vendor/spring';

const BASE_URL = 'http://localhost:8080';

export const recordsLoader = (page?: number) => {
  return async (): Promise<SpringPage<Record>> => {
    const res = await fetch(`${BASE_URL}/records?linesPerPage=12&page=${page}`);
    const records = await res.json();
    return records;
  };
};

import { ChartsResponse } from '../types/charts-response';
import { BASE_URL } from './system';

export const chartsLoader = async (): Promise<ChartsResponse> => {
  const recordsResponse = await fetch(`${BASE_URL}/records`);
  const gamesResponse = await fetch(`${BASE_URL}/games`);
  const records = await recordsResponse.json();
  const games = await gamesResponse.json();
  return { records, games };
};

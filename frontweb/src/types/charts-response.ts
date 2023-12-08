import { Game } from '../types/game';
import { Record } from '../types/record';
import { SpringPage } from '../types/vendor/spring';

export type ChartsResponse = {
  records: SpringPage<Record>;
  games: Game[];
};

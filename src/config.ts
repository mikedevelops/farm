import * as moment from 'moment';

// Dimensions (adjust to be a mutliple of 8)
export const WIDTH = window.innerWidth - (window.innerWidth % 8);
export const HEIGHT = window.innerHeight - (window.innerHeight % 8);

// Time
export const DEFAULT_GAME_TIME_START = moment({ year: 1988, month: 9, date: 3 });
export const REAL_TIME_START =  moment();
export const GAME_TIME_MULTIPLIERS = {
    // 1440 (24h) / 3 = 480x
    default: 2880,
};

// Units
export const GAME_UNIT_SIZE = 64;

// Level
export const MAP_SIZE = 8;
